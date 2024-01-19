const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackModules = require('webpack-modules');
const webpackNodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { ESBuildMinifyPlugin } = require('esbuild-loader');

const BASE_CONFIG = require('./webpack.config.base');
const { DEFINE_CONFIG, WEBPACK_DEFINE_CONFIG } = require('./bundle-info');
const staticFolderPath = DEFINE_CONFIG.production.STATIC_PATH;

const minify = {
  removeComments: true,
  collapseWhitespace: true,
  removeRedundantAttributes: true,
  useShortDoctype: true,
  removeEmptyAttributes: true,
  removeStyleLinkTypeAttributes: true,
  keepClosingSlash: true,
  minifyJS: true,
  minifyCSS: true,
  minifyURLs: true,
  xhtml: true,
};

const CLIENT_MODERN_CONFIG = {
  name: `webpack-client-prod-config [modern]`,
  entry: {
    app: [
      path.resolve(__dirname, '../src/client/polyfills.modern.ts'),
      path.resolve(__dirname, '../src/client/client-entrypoint.ts'),
    ],
  },
  output: {
    path: path.resolve(__dirname, `../dist`),
    filename: `${staticFolderPath}/modern/js/[name].[chunkhash].mjs`,
    chunkFilename: `${staticFolderPath}/modern/js/[name].[chunkhash].mjs`,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2022',
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2022',
      }),
    ],
  },
  plugins: [
    new WebpackModules(),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.ejs'),
      filename: path.resolve(__dirname, `../dist/index.html`),
      inject: false,
      minify,
      chunksSortMode: 'none',
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index_fragment.ejs'),
      filename: path.resolve(__dirname, `../dist/index_fragment.html`),
      inject: false,
      minify,
      chunksSortMode: 'none',
    }),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index_static.ejs'),
      filename: path.resolve(__dirname, `../dist/index_static.html`),
      inject: false,
      minify,
      chunksSortMode: 'none',
    }),
    new LoadablePlugin({
      writeToDisk: {
        filename: path.resolve(__dirname, `../dist/modern`),
      },
    }),
    // Do these plugins only once per build so we'll do it here instead of base
    new CopyWebpackPlugin({
      patterns: [
        {
          globOptions: {
            ignore: ['index.html', 'index.ejs'],
          },
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, `../dist/static`),
        },
      ],
    }),
  ],
};

const CLIENT_PROD_CONFIG = {
  target: 'web',
  mode: 'production',
  stats: {
    preset: 'errors-only',
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  optimization: {
    splitChunks: {
      name: false,
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'initial',
        },
      },
    },
    runtimeChunk: 'single',
  },
  plugins: [new webpack.DefinePlugin(WEBPACK_DEFINE_CONFIG.prod)],
};

const SERVER_PROD_CONFIG = {
  name: 'webpack-server-prod-config',
  target: 'node',
  mode: 'production',
  stats: {
    preset: 'errors-only',
  },
  entry: {
    server: path.resolve(__dirname, '../src/server/server.ts'),
    test: path.resolve(__dirname, '../src/server/test.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  externals: [
    webpackNodeExternals(),
    webpackNodeExternals({
      modulesDir: path.resolve(__dirname, '../../../node_modules'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'node18',
        },
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@loadable/babel-plugin'],
          },
        },
      },
    ],
  },
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2022',
      }),
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
};

const ANALYZE_CONFIG = {
  plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static' })],
};

if (process.env.ANALYZE) {
  module.exports = merge(
    BASE_CONFIG,
    CLIENT_PROD_CONFIG,
    CLIENT_MODERN_CONFIG,
    ANALYZE_CONFIG
  );
} else {
  module.exports = [
    merge(BASE_CONFIG, CLIENT_PROD_CONFIG, CLIENT_MODERN_CONFIG),
    merge(BASE_CONFIG, SERVER_PROD_CONFIG),
  ];
}

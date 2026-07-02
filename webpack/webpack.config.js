const path = require('path');

const LoadablePlugin = require('@loadable/webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { merge } = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const { DEFINE_CONFIG, DEVSERVER_PROXIES } = require('./bundle-info');
const BASE_CONFIG = require('./webpack.config.base');

const isProd = process.env.NODE_ENV === 'production';
const isCSR = process.env.CSR === 'true';
const devHost = process.env.DEV_HOST || 'localhost';
const devBundlePort = process.env.DEV_PORT || '3000';

const staticFolderPath = DEFINE_CONFIG.production.STATIC_PATH;

const minify = isProd
  ? {
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
    }
  : false;

const CLIENT_CONFIG = merge(BASE_CONFIG, {
  name: `webpack-client-${isProd ? 'prod' : 'dev'}-config`,
  target: 'web',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? undefined : 'source-map',
  stats: {
    preset: isProd ? 'errors-only' : 'errors-warnings',
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
  },
  entry: {
    app: [
      path.resolve(__dirname, '../src/client/polyfills.modern.ts'),
      path.resolve(__dirname, '../src/client/client-entrypoint.ts'),
    ],
  },
  output: {
    path: path.resolve(__dirname, `../dist`),
    filename: `${staticFolderPath}/modern/js/[name]${
      isProd ? `.[chunkhash]` : ''
    }.mjs`,
    // Development bundles served via webpack-dev-server at port 3000
    // While the Express server is running on port 3001
    publicPath: isProd || isCSR ? '/' : `//${devHost}:${devBundlePort}/`,
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2022',
            },
          },
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                '@loadable/babel-plugin',
                !isProd && 'react-refresh/babel',
              ].filter(Boolean),
              // envName: 'modern',
            },
          },
        ],
      },
      {
        // Same CSS modules config for development and production
        // We are doing full SSR in development so we extract CSS
        // to avoid FOUC in development. CSR development can use
        // style-loader or MiniCssExtractPlugin, both work fine.
        test: /\.module\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:8]',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  optimization: isProd
    ? {
        minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
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
      }
    : {
        minimize: false,
        splitChunks: false,
        runtimeChunk: false,
      },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'true',
    }),
    !isProd && new ReactRefreshWebpackPlugin(),
    // !isProd &&
    //   // Template enables CSR render from the webpack-dev-server port
    //   new HtmlWebPackPlugin({
    //     template: path.resolve(__dirname, '../public/index.html'),
    //     filename: './index_csr.html',
    //     chunksSortMode: 'none',
    //     inject: true,
    //     favicon: path.resolve(__dirname, '../public/icon/icon-dev.svg'),
    //   }),
    !isCSR &&
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
    new MiniCssExtractPlugin({
      filename: `${staticFolderPath}/css/[name].css`,
    }),
    new LoadablePlugin({
      writeToDisk: {
        filename: path.resolve(__dirname, `../dist/modern`),
      },
    }),
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
});

const SERVER_CONFIG = merge(BASE_CONFIG, {
  name: `webpack-server-${isProd ? 'prod' : 'dev'}-config`,
  target: 'node',
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? false : 'source-map',
  stats: {
    preset: isProd ? 'errors-only' : 'errors-warnings',
  },
  entry: isProd
    ? {
        server: path.resolve(__dirname, '../src/server/server.ts'),
        test: path.resolve(__dirname, '../src/server/test.ts'),
      }
    : {
        server: path.resolve(__dirname, '../src/server/server.ts'),
      },
  output: {
    filename: `[name]${isProd ? '' : '-dev'}.js`,
    path: path.resolve(__dirname, '../dist'),
    devtoolModuleFilenameTemplate: isProd
      ? undefined
      : '[absolute-resource-path]',
  },
  externals: [
    webpackNodeExternals(),
    webpackNodeExternals({
      modulesDir: path.resolve(__dirname, '../../../node_modules'),
    }),
  ],
  externalsPresets: { node: true },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@loadable/babel-plugin'],
              // excluding this envName causes the `development` env
              // in babel.config.js to be applied incorrectly loading
              // react-refresh in server bundle causing `$RefreshReg$ is not defined`
              envName: 'modern',
            },
          },
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'node20',
            },
          },
        ],
      },
      {
        test: /\.module\.css$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:8]',
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  optimization: isProd
    ? {
        minimizer: [
          new EsbuildPlugin({
            target: 'es2022',
          }),
        ],
      }
    : {
        minimize: false,
        nodeEnv: false,
      },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: 'false',
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
});

if (process.env.ANALYZE) {
  // Produces client-bundle analysis
  module.exports = merge(BASE_CONFIG, CLIENT_CONFIG, {
    plugins: [new BundleAnalyzerPlugin({ analyzerMode: 'static' })],
  });
} else if (process.env.CSR) {
  // Classic CSR development config with webpack-dev-server at port 3000
  // npm script: `"cross-env NODE_ENV=development CSR=true webpack serve --config webpack/webpack.config.js"`
  module.exports = merge(CLIENT_CONFIG, {
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, '../public/index.html'),
        filename: './index.html',
        chunksSortMode: 'none',
        favicon: path.resolve(__dirname, '../public/icon/icon-dev.svg'),
      }),
    ],
    devServer: {
      host: '0.0.0.0',
      port: devBundlePort,
      hot: true,
      historyApiFallback: true,
      proxy: DEVSERVER_PROXIES,
      open: true,
    },
  });
} else {
  module.exports = [CLIENT_CONFIG, SERVER_CONFIG];

  module.exports.parallelism = 2;
}

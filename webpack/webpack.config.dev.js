const webpack = require('webpack');
const { merge } = require('webpack-merge');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const BASE_CONFIG = require('./webpack.config.base');
const {
  DEFINE_CONFIG,
  DEVSERVER_PROXIES,
  WEBPACK_DEFINE_CONFIG,
} = require('./bundle-info');

const staticFolderPath = DEFINE_CONFIG.production.STATIC_PATH;

const CLIENT_DEV_CONFIG = {
  name: 'webpack-dev-config',
  target: 'web',
  stats: {
    preset: 'errors-only',
  },
  mode: 'development',
  entry: path.resolve(__dirname, '../src/client/client-entrypoint.ts'),
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2015',
        },
      },
      // {
      //   test: /\.(t|j)sx?$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: { envName: 'modern' },
      //   },
      // },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
              name: `${staticFolderPath}/[hash].[ext]`,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(WEBPACK_DEFINE_CONFIG.dev),
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
      filename: './index.html',
      chunksSortMode: 'none',
    }),
    new BrowserSyncPlugin(
      {
        server: false,
        host: 'localhost',
        port: 3000,
        proxy: 'http://127.0.0.1:3010',
        open: 'local',
        ui: false,
      },
      { reload: false }
    ),
    // new FriendlyErrorsWebpackPlugin({
    //   compilationSuccessInfo: {
    //     messages: ['Application is now running at http://localhost:3000'],
    //   },
    // }),
    new CopyWebpackPlugin({
      patterns: [
        {
          globOptions: { ignore: ['index.html', 'index.ejs'] },
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, `../dist/${staticFolderPath}`),
        },
      ],
    }),
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3010,
    hot: true,
    historyApiFallback: true,
    proxy: DEVSERVER_PROXIES,
    watchFiles: ['src/**/*'],
  },
};

// This is a hack because I can't get the file-loader to work in production, so I have included in the base and then delete and override here for dev.
// Locally I want images as 34234234234324.png, in prod i want /static/img/[name].[ext]?[hash]
delete BASE_CONFIG.module;

module.exports = merge(BASE_CONFIG, CLIENT_DEV_CONFIG);

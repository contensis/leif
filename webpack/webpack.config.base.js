const path = require('path');
const webpack = require('webpack');

const ASSET_PATH = '/';

const { DEFINE_CONFIG, WEBPACK_DEFINE_CONFIG } = require('./bundle-info');
const staticFolderPath = DEFINE_CONFIG.production.STATIC_PATH;

module.exports = {
  output: {
    publicPath: ASSET_PATH,
  },
  externals: ['oidc-client'],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '~': path.resolve(__dirname, '../src/app'),
      '-': path.resolve(__dirname, '../'),
      react: path.resolve('node_modules/react'),
      'react-dom': '@hot-loader/react-dom',
      '@zengenti/contensis-react-base': 'zengenti-isomorphic-base',
    },
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'stylelint-custom-processor-loader',
            options: {
              emitWarning: true,
            },
          },
          { loader: 'eslint-loader' },
        ],
      },
      {
        test: /\.m?jsx?$/,
        include: [
          path.resolve('src'),
          // These dependencies have es6 syntax which ie11 doesn't like.
          path.resolve('node_modules/contensis-delivery-api'),
          path.resolve('node_modules/@zengenti/contensis-react-base'),
          path.resolve('node_modules/zengenti-isomorphic-base'),
        ],
        use: {
          loader: 'babel-loader',
          options: { envName: 'modern' },
        },
      },
      {
        test: /\.(gif|png|jpe?g|svg|ico)$/i,
        use: [
          `file-loader?name=${staticFolderPath}/img/[name].[ext]?[hash]`,
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
  plugins: [new webpack.DefinePlugin(WEBPACK_DEFINE_CONFIG.base)],
};

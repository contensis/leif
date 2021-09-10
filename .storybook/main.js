const path = require('path');
const webpack = require('webpack');
const defineConfig = require('../webpack/define-config-webpack').base;

module.exports = {
  stories: ['../src/**/*.stories.@(tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __isBrowser__: 'true',
      }),
      new webpack.DefinePlugin(defineConfig)
    );
    config.module.rules.push({
      resolve: {
        alias: {
          '~': path.resolve(__dirname, '../src/app'),
          app: path.resolve(__dirname, '../src/app'),
        },
      },
    });
    return { ...config };
  },
};

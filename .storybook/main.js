const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  webpackFinal: config => {
    config.module.rules.push({
      resolve: {
        extensions: ['ts', 'tsx', '.js', '.jsx', '.json', '.md'],
        alias: {
          '~': path.resolve(__dirname, '../src/app'),
          app: path.resolve(__dirname, '../src/app'),
          'react-dom': '@hot-loader/react-dom'
        },
      },
    });
    return { ...config };
  },
};

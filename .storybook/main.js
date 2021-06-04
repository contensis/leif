const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-a11y',
  ],
  typescript: {
    reactDocgen: 'none',
  },
  webpackFinal: config => {
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

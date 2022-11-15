const defineConfig = require('./define-config').build;
const { stringifyStrings } = require('@zengenti/contensis-react-base/util');

module.exports = {
  base: stringifyStrings(defineConfig),
  dev: {
    __isBrowser__: 'true',
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development'
    ),
    'process.env.__NEXT_IMAGE_OPTS': undefined,
  },
  prod: {
    __isBrowser__: 'false',
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'production'
    ),
    'process.env.__NEXT_IMAGE_OPTS': undefined,
  },
};

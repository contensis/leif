const path = require('path');

module.exports = {
  plugins: ['prettier', 'react', 'react-hooks', 'flowtype', 'jsdoc'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/flowtype',
    'plugin:jsdoc/recommended',
  ],
  env: {
    browser: true,
    node: true,
    jest: true,
    mocha: true,
    es6: true,
  },
  globals: {
    __isBrowser__: true,
  },

  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'jsdoc/require-returns': 0,
    'jsdoc/require-returns-description': 0,
    'jsdoc/require-param-description': 0,
    'jsdoc/check-alignment': 0,
    'jsdoc/valid-types': 0,
    'jsdoc/require-property-description': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-debugger': 0,
    'no-alert': 0,
    'no-console': [
      'error',
      {
        allow: ['error', 'info'],
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        endOfLine: 'auto',
      },
    ],
  },
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true,
    },
    react: {
      version: '^16.0.0',
      flowVersion: '^0.81.0',
    },
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, './webpack/webpack.config.base.js'),
      },
    },
  },
};

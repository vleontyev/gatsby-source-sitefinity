module.exports = {
  env: {
    amd: true,
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    quotes: ['error', 'single', {avoidEscape: true}],
    'valid-jsdoc': [
      'warn',
      {
        prefer: {
          return: 'returns',
        },
        requireParamDescription: false,
        requireReturn: false,
        requireReturnDescription: false,
      },
    ],
  },
};
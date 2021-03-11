module.exports = {
  extends: '@cybozu/eslint-config/presets/node-prettier',
  env: {
    mocha: true,
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: true,
      }
    ],
  },
};

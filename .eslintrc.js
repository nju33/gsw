module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  env: {
    node: true,
    browser: true,
    'jest/globals': true,
  },
  extends: [
    'xo-space',
    'xo-space/esnext',
    'xo-space/browser',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    // `@param`に`{type}`や`@returns`の必須を無効に
    'valid-jsdoc': 0,
    // eslint の`no-unused-vars`では`interface`などが扱えないので
    // eslint 側のルールは無効化し、 ts-eslint のルールを使う
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
};

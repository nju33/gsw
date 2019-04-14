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
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  rules: {
    // `@param`に`{type}`や`@returns`の必須を無効に
    "valid-jsdoc": 0,
    // eslint の`no-unused-vars`では`interface`などが扱えないので
    // eslint 側のルールは無効化し、 ts-eslint のルールを使う
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 2,
    // prettier に任せる
    indent: 0,
    "@typescript-eslint/indent": 0
  },
};

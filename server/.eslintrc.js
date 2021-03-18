module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
    "jest/global": true 
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
};

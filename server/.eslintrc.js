module.exports = {
  env: {
    es2021: true,
    commonjs: true,
    node: true,
    jest: true,
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  plugins: ['prettier', 'jest'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
  },
  parserOptions: {
    ecmaVersion: 12,
  },
};

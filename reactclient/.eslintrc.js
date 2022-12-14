module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'linebreak-style': 0,
    'no-shadow': 0,
    'import/no-cycle': 0,
    'react/jsx-filename-extension': 0,
    'react/button-has-type': 0,
  },
};

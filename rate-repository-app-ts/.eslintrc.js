module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint', 'jest'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    // "@react-native-community",
  ],
  env: {
    'react-native/react-native': true,
  },
  rules: {
    // "react/prop-types": "off",
    'react/react-in-jsx-scope': 'off',
  },
};

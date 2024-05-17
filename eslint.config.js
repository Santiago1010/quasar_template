import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        myCustomGlobal: 'readonly',
      },
    },
    // ...compat.extends('eslint:recommended', 'plugin:vue/vue3-recommended'),
    rules: {
      semi: ['warn', 'always'],
    },
  },
];

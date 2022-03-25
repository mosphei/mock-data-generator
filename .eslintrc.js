module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
      '@typescript-eslint',
    ],
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/eslint-recommended',
      "plugin:@typescript-eslint/recommended"
    ],
    env: {
        browser: true,
        es6: true,
        node: true
    },
    "rules": { 
      "no-console": 0
    }
  };
  
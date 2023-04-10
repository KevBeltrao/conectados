module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', 'prettier', 'detect-bad-words'],
  rules: {
    '@typescript-eslint/comma-dangle': [2, 'always-multiline'],
    '@typescript-eslint/semi': ['error', 'always'],
    'comma-dangle': [2, 'always-multiline'],
    'detect-bad-words/in-code': 'error',
    'detect-bad-words/in-comment': 'error',
    eqeqeq: [2, 'always'],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'max-len': [
      'error',
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-alert': 'warn',
    'no-console': 'warn',
    'no-duplicate-imports': 'error',
    'no-implicit-coercion': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        bracketSpacing: true,
        eslintIntegration: true,
        printWidth: 80,
      },
    ],
    'react/react-in-jsx-scope': 'off',
    semi: [2, 'always'],
  },
};

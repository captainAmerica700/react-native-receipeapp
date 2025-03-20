module.exports = {
  plugins: [
    'check-file',
    'n',
    'react-native',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react-native/all',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prefer-arrow-callback': ['error'],
    'prefer-template': ['error'],
    'semi': ['error'],
    'n/no-process-env': ['error'],
    'check-file/no-index': 'error',
    'check-file/filename-blocklist': [
      'error',
      {
        '**/*.model.ts': '*.models.ts',
        '**/*.util.ts': '*.utils.ts',
      },
    ],
    'check-file/folder-match-with-fex': [
      'error',
      {
        '*.test.{js,jsx,ts,tsx}': '**/__tests__/',
        '*.styled.{jsx,tsx}': '**/components/',
      },
    ],
    'check-file/folder-naming-convention': [
      'error',
      {
        'src/**/!^[.*': 'CAMEL_CASE',
        'mocks/*/': 'KEBAB_CASE',
      },
    ],
    'react/prop-types': 'off', // If using TypeScript, React prop types are unnecessary
    'react/react-in-jsx-scope': 'off', // React 17+ doesn't require React in scope
    'react-native/no-inline-styles': 'warn', // React Native specific: avoid inline styles
    'react-native/split-platform-components': 'warn', // Warn for platform-specific components
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Optional, but can be turned on for better TypeScript support
    '@typescript-eslint/no-explicit-any': 'warn', // Warn if 'any' type is used in TypeScript
  },
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      rules: {
        'react/prop-types': 'off', // Turn off prop-types for TypeScript files
        '@typescript-eslint/explicit-function-return-type': 'error', // Enforce function return types
      },
    },
  ],
};

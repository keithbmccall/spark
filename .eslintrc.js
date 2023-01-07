module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'kentcdodds',
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'kentcdodds/best-practices',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/jsx-runtime',
  ],
  parser: '@typescript-eslint/parser',
  root: true,
  globals: {
    global: true,
    document: true,
    setTimeout: true,
    setInterval: true,
    console: true,
    window: true,
    __DEV__: true,
  },
  rules: {
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/rule-name': 0,
    'jsx-a11y/click-events-have-key-events': 1,
    '@typescript-eslint/no-unused-vars': [
      1,
      {
        varsIgnorePattern: 'React',
      },
    ],
    'react/self-closing-comp': 1,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-explicit-any': 1,
    'react/no-unstable-nested-components': 0,
    'one-var': 0,
    'react-native/no-inline-styles': 0,
    '@typescript-eslint/prefer-ts-expect-error': 0,
    'no-case-declarations': 0,
    '@typescript-eslint/sort-type-union-intersection-members': 0,
  },
};

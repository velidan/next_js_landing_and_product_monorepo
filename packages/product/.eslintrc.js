module.exports = {
  extends: ['next', 'next/core-web-vitals', 'eslint:recommended'],
  globals: {
    React: 'readonly',
  },
  overrides: [
    {
      files: ['*.(ts|tsx|js|jsx|mjs|cjs)'],
      rules: {
        // example of overriding a rule
        'storybook/hierarchy-separator': 'error',
      },
    },
  ],
  rules: {
    'no-unused-vars': [1, { args: 'after-used', argsIgnorePattern: '^_' }],
  },
};

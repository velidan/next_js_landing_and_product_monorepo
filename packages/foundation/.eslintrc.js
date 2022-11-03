module.exports = {
  extends: ['eslint:recommended'],
  globals: {
    React: 'readonly',
  },
  overrides: [
    {
      files: ['*.stories.@(ts|tsx|js|jsx|mjs|cjs)'],
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

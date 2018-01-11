module.exports = {
  extends: [
    'eslint:recommended',
    'xo-space',
    'plugin:node/recommended',
    'plugin:unicorn/recommended',
  ],
  plugins: [
    'node',
    'unicorn',
  ],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
  },
}

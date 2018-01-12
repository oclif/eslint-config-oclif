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
    'capitalized-comments': 0,
    'comma-dangle': ['error', 'always-multiline'],
    curly: 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
  },
  globals: {
    context: true,
    it: true,
  }
}

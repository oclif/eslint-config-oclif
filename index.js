import importPlugin from 'eslint-plugin-import'
import perfectionist from 'eslint-plugin-perfectionist'
import eslint from '@eslint/js'
import nodePlugin from 'eslint-plugin-n'
import tseslint from 'typescript-eslint'
import jsdoc from 'eslint-plugin-jsdoc'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import mocha from 'eslint-plugin-mocha'
import xo from 'eslint-config-xo/space'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  ...xo,
  mocha.configs.flat.recommended,
  nodePlugin.configs['flat/recommended'],
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  perfectionist.configs['recommended-natural'],
  jsdoc.configs['flat/recommended'],
  {
    files: ['test/**/*.test.ts'],
    rules: {
      '@typescript-eslint/no-unused-expressions': 'off',
    },
  },
  {
    plugins: {
      n: nodePlugin,
      mocha,
      unicorn: eslintPluginUnicorn,
    },
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        NodeJS: true,
      },
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'mocha/no-setup-in-describe': 'off',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-async-describe': 'off',
      'mocha/no-identical-title': 'off',
      '@stylistic/semi': 0,
      'capitalized-comments': 0,
      'comma-dangle': ['error', 'always-multiline'],
      'default-case': 0,
      'no-multi-spaces': 0,
      'n/hashbang': 0,
      curly: 0,
      indent: [
        'error',
        2,
        {
          SwitchCase: 0,
          MemberExpression: 0,
        },
      ],
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      semi: ['error', 'never'],
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'warn',
      'logical-assignment-operators': 'off',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/tag-lines': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-param-type': 'off',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'off',
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-unresolved': 'error',
      'n/no-missing-import': 'off',
      'n/no-unsupported-features/es-syntax': 'off',
      'no-unused-expressions': 'off',
      'no-useless-constructor': 'off',
      'perfectionist/sort-modules': 'off',
      'perfectionist/sort-classes': [
        'error',
        {
          groups: [
            'index-signature',
            'static-property',
            'property',
            'private-property',
            'constructor',
            'static-method',
            'static-private-method',
            ['get-method', 'set-method'],
            'method',
            'private-method',
            'unknown',
          ],
          order: 'asc',
          type: 'alphabetical',
        },
      ],
    },
  },
)

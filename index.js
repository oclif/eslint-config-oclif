import eslint from '@eslint/js'
import xo from 'eslint-config-xo/space'
import importPlugin from 'eslint-plugin-import'
import jsdoc from 'eslint-plugin-jsdoc'
import mocha from 'eslint-plugin-mocha'
import nodePlugin from 'eslint-plugin-n'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import tseslint, {configs} from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  configs.recommended,
  ...xo,
  mocha.configs.flat.recommended,
  nodePlugin.configs['flat/recommended'],
  eslintPluginUnicorn.configs['flat/recommended'],
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
    languageOptions: {
      globals: {
        describe: true,
        it: true,
        NodeJS: true,
      },
    },
    plugins: {
      mocha,
      n: nodePlugin,
    },
    rules: {
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/curly-newline': ['off'],
      '@stylistic/indent': [
        'error',
        2,
        {
          MemberExpression: 0,
          SwitchCase: 0,
        },
      ],
      '@stylistic/no-multi-spaces': 0,
      '@stylistic/quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
        },
      ],
      '@stylistic/semi': 0,
      '@typescript-eslint/no-dupe-class-members': 'error',
      '@typescript-eslint/no-redeclare': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/no-var-requires': 'off',
      'capitalized-comments': 0,
      curly: 0,
      'default-case': 0,
      'import/no-unresolved': 'error',
      'jsdoc/require-jsdoc': 'off',
      'jsdoc/require-param': 'off',
      'jsdoc/require-param-type': 'off',
      'jsdoc/require-returns': 'off',
      'jsdoc/require-returns-type': 'off',
      'jsdoc/tag-lines': 'off',
      'logical-assignment-operators': 'off',
      'mocha/no-async-describe': 'off',
      'mocha/no-identical-title': 'off',
      'mocha/no-mocha-arrows': 'off',
      'mocha/no-setup-in-describe': 'off',
      'n/hashbang': 0,
      'n/no-missing-import': 'off',
      'n/no-unsupported-features/es-syntax': 'off',
      'no-dupe-class-members': 'off',
      'no-redeclare': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'no-useless-constructor': 'off',
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
      'perfectionist/sort-modules': 'off',
      'unicorn/import-style': [
        'error',
        {
          styles: {
            'node:path': {
              named: true,
            },
          },
        },
      ],
      'unicorn/no-await-expression-member': 'off',
      'unicorn/no-null': 'off',
      'unicorn/prefer-module': 'warn',
      'unicorn/prevent-abbreviations': 'off',
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
  },
)

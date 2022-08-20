module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'simple-import-sort',
    'jest-dom',
    'testing-library',
    'prettier',
    'unused-imports',
  ],
  overrides: [
    {
      files: '*.js',
      rules: {
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.test.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '(Props|Window)$',
          match: true,
        },
      },
    ],
    'no-shadow': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-static-element-interactions': 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'no-console': 'error',
    'no-confusing-arrow': [
      'error',
      {
        allowParens: false,
      },
    ],

    'no-redeclare': [
      'error',
      {
        builtinGlobals: false,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__typename'],
      },
    ],
    'sort-imports': 'off',
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    '@typescript-eslint/no-explicit-any': 'error',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'import/no-unresolved': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/order': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'simple-import-sort/imports': [
      'off',
      {
        groups: [
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['src'],
          [('^react', '^@?\\w')],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.mdx$'],
          ['^.+\\.s?css$'],
        ],
      },
    ],
  },
};

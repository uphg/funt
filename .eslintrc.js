module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
    // jest: true
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    // js/ts
    indent: ['error', 2, { 'SwitchCase': 1 }],
    quotes: ['error', 'single', { 'avoidEscape': true }],
    'comma-dangle': ['error', 'never'], // 禁止对象尾逗号
    // 禁止特定语法
    'no-restricted-syntax': [
      'error',
      'WithStatement' // with 语句
      // "BinaryExpression[operator='in']" // in 运算符
    ],
    camelcase: 'error',
    'no-var': 'error',
    'no-empty': 'error',
    'prefer-const': [
      'warn',
      { destructuring: 'all' }
    ],
    'prefer-template': 'error',
    'object-shorthand': 'off',
    'no-constant-condition': 'error',
    'space-before-function-paren': ['error', 'never'],
    'no-multi-spaces': ['error', { ignoreEOLComments: true }],
    'no-dupe-args': 'error',
    'key-spacing': ['error', { 'afterColon': true }],
    'keyword-spacing': ['error', { 'before': true }],
    'eol-last': ['error', 'always'],
    // 'no-duplicate-case': 'off',
    'no-case-declarations': 'off',
    'prefer-spread': 'off',
    'prefer-rest-params': 'off',
    'no-undef': 'off',

    // TS
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off', // 关闭：禁止使用 ! 进行非空断言
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-ts-comment': 'off'
  }
};

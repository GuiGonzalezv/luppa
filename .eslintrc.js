module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'no-unused-vars': 'warn',
    indent: 'warn',
    semi: ['warn', 'never'],
    'semi-spacing': 'warn',
    quotes: 'warn',
    'no-var': 'warn',
    'comma-spacing': 'warn',
    'no-trailing-spaces': 'warn',
    'brace-style': ['warn', '1tbs', {allowSingleLine: false}],
    'max-len': ['warn', {code: 140, comments: 140, tabWidth: 4}],
    curly: ['warn', 'multi-line', 'consistent'],
    'no-else-return': 'warn',
    'func-call-spacing': ['error', 'never'],
    'keyword-spacing': ['warn'],
    'block-spacing': ['warn', 'always'],
    'key-spacing': ['warn', {mode: 'strict'}],
    'object-curly-spacing': ['warn', 'never'],
    'space-before-blocks': ['warn', 'always'],
    'space-in-parens': ['warn', 'never'],
    'space-before-function-paren': ['warn', 'never'],
    'require-atomic-updates': 'off'
  }
}

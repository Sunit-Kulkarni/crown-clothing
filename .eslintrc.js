module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
  },
  plugins: [
    'fp',
    'react',
    'react-hooks',
  ],
  rules: {
    'class-methods-use-this': ['error', {
      exceptMethods: ['render'],
    }],
    'arrow-parens': [0, 'always'],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
      imports: 'never',
      objects: 'always-multiline',
    }],
    'import/prefer-default-export': 0,
    'import/no-unresolved': 'off',
    'linebreak-style': 0,
    'new-cap': 0,
    'no-alert': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'react/no-unused-prop-types': 1,
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'sort-keys': 1,
    'strict': ['error', 'safe'],
    // Temporary fix for linter issues
    // 'template-curly-spacing': 'off',
    // 'indent': "off"
  },
};

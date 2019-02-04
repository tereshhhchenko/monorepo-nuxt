module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017
  },
  plugins: [
    'prettier'
  ],
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended',
  ],
  rules: {
    "vue/singleline-html-element-content-newline": ["error", {
      "ignoreWhenNoAttributes": true,
      "ignoreWhenEmpty": true,
      "ignores": ["pre", "textarea", "h1"]
    }]
  }
}

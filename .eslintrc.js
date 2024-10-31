/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential', // configuração básica para Vue 3
    './.eslintrc-auto-import.json',
  ],  
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}

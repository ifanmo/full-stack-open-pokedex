import globals from 'globals'
import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['./**/*.{js,jsx}'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.node },
      ecmaVersion: 'latest',
    },
    
  },
  {
    ignores: ['dist/**', 'webpack.config.js'],
  },
]
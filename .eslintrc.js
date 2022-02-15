module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: 'tsconfig.json',
      }
    }
  ],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: ['react', '@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
	],
	ignorePatterns: ['webpack.config.js','**/*.config.js', '.eslintrc.js'],
}
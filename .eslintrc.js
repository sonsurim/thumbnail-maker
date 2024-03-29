module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	plugins: ['react', '@typescript-eslint', 'eslint-plugin-import-helpers'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
    'plugin:prettier/recommended'
	],
	ignorePatterns: ['webpack.config.js','**/*.config.js', '.eslintrc.js'],
	rules: {
		'import-helpers/order-imports': [
			'error', {
				newlinesBetween: 'never',
				groups: [
					'absolute',
					'module',
					['parent', 'sibling', 'index'],
					'/^@shared/',
				],
				alphabetize: { order: 'asc', ignoreCase: true },
			},
		],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-pascal-case': ['error'],
		"react/self-closing-comp": ["error", {
			"component": true,
			"html": true
		}],
		'@typescript-eslint/array-type': ['error', { default: 'array' }],
		'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/member-ordering': 'error',
		'@typescript-eslint/method-signature-style': ['error', 'method'],
		'@typescript-eslint/no-confusing-void-expression': 'error',
		'@typescript-eslint/no-duplicate-imports': 'error',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/type-annotation-spacing': 'error',
	}
}
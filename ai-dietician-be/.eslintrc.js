module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import', 'sort-keys'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'jest.config.js',
    'src/config/sequelize.config.js',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: false },
    ],
    'arrow-body-style': 'warn',
    'import/no-cycle': 'error',
    'lines-between-class-members': ['error', 'always'],
    'no-console': 'warn',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-return-await': 'error',
    'object-shorthand': ['error', 'properties'],
    'prefer-template': 'error',
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        endOfLine: 'auto',
        printWidth: 80,
        quoteProps: 'as-needed',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
      },
    ],
    'sort-keys': 'off',
    'sort-keys/sort-keys-fix': [
      'warn',
      'asc',
      {
        minKeys: 5,
        natural: true,
      },
    ],
  },
  overrides: [
    {
      files: ['src/migrations/*.ts', 'src/seeders/*.ts'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        'sort-keys/sort-keys-fix': 'off',
      },
    },
  ],
};

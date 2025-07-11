module.exports = {
  collectCoverageFrom: [
    'src/**/*.(t|j)s',
    '!src/migrations/*',
    '!src/seeders/*',
    '!src/core/*',
    '!src/core/interfaces/*',
    '!src/core/logger/*',
    '!src/config/*',
    '!src/common/exceptions/*',
    '!src/common/filters/*',
    '!src/common/guards/*',
    '!src/common/interceptor/*',
    '!src/common/interfaces/*',
    '!src/common/middlewares/*',
    '!src/common/utils/*',
    '!src/app*',
    '!src/api/v1/routes.ts',
  ],
  coverageDirectory: './coverage',
  logHeapUsage: true,
  maxWorkers: 2,
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  testRegex: '.*\\.(test|spec)\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
};

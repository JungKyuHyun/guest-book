module.exports = {
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', '<rootDir>'],
  testEnvironment: 'jsdom',
  // https://jestjs.io/docs/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: ['./jest.setup.js']
};

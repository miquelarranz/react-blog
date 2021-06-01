module.exports = {
	roots: ['<rootDir>'],
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
		"node_modules/carousel-component-lib/.+\\.(j|t)sx?$": "ts-jest"
	},
    transformIgnorePatterns: [
      "node_modules/(?!carousel-component-lib/.*)"
    ],
	testMatch: ['<rootDir>/src/**/__tests__/**/*.{ts,tsx}', '<rootDir>/src/**/?(*.)(spec|test).{ts,tsx}'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	coverageDirectory: './coverage',
	modulePathIgnorePatterns: ['/node_modules/', '__mocks__'],
	watchPathIgnorePatterns: ['/node_modules/', '__mocks__'],
};

/** @type {import('@jest/types').Config.InitialOptions} */

const config = {
	verbose: true,
};

module.exports = config;

module.exports = async () => {
	return {
		verbose: true,
		testEnvironment: 'jsdom',
		setupFilesAfterEnv: ['./src/utils/jest/jest-setup.ts'],
		moduleNameMapper: {
			"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/mocks/tests/fileMock.js",
			"\\.(css|scss)$": "identity-obj-proxy"
		  }
	};
};

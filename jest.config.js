module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {tsconfig: 'tsconfig.test.json'}]
    },
    testEnvironment: 'jsdom',
    roots: ['src']
};

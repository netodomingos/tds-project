export default {
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: [
      "<rootDir>/support/setupTests.js"
   ],
  }
moduleNameMapper: {
  "\\.  (jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m  4a|aac|oga)$":"<rootDir>/__mocks__/fileMock.js",
  "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
},
// <rootDir>/__mocks__/styleMock.js
module.exports = {};
// <rootDir>/__mocks__/fileMock.js
module.exports = "test-file-stub";
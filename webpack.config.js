const path = require('path');

module.exports = {
  entry: './src/sourceFile.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'bin')
  }
};
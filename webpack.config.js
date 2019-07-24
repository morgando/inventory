const path = require('path');

module.exports = {
  entry: './src/javascripts/tabs.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};

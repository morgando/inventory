const path = require('path');

module.exports = {
      module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  entry: './public/src/javascripts/tabs.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist')
  }
};

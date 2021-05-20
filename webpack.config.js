const path = require('path');

module.exports = {
  entry: './CriarConta.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
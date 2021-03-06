const path = require('path');
// import path from 'path';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    app: './src/app.js',
  },
  output: {
    filename: '[name]-[contenthash]-bundle.js',
    path: path.resolve(__dirname, '../', 'build')
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

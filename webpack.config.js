const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  homepage: "https://anfjbajfa.github.io/CityWalkerApp/",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader', 
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), 
    hot: true, 
    compress: true, 
    port: 3000,
  },
};

const path = require('path');

module.exports = {
  mode: 'development', // 可选 'production' 或 'development'
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // 匹配所有 .js 文件
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          loader: 'babel-loader', // 使用 babel-loader 转换代码
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'), // 告诉开发服务器从哪个目录提供内容
    hot: true, // 启用热更新
    compress: true, // 启用 gzip 压缩
    port: 3000, // 开发服务器端口号
  },
};

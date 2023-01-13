const path = require('path')

const conf = {
  entry: './dev',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    publicPath: "/build/" //Since webpack 5 it REALLY IMPORTANT to start path with "/" symbol (webpack-dev-server doesnt work without it)
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname)
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
}

module.exports = (env, options) => {
  const isProd = options.mode === "production"
  conf.devtool = isProd ? false : "eval-cheap-module-source-map"

  return conf
}
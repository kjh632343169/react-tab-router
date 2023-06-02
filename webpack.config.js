// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CustomPlugin = require('./src/plugin/customPlugin')

const isProduction = process.env.NODE_ENV == 'production'

const stylesHandler = isProduction
  ? MiniCssExtractPlugin.loader
  : 'style-loader'

const config = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/', // 可以解决browserRouter路由资源找不到问题
    filename: '[name].bundle.js',
    clean: true, // 清空打包目录
    chunkFilename: '[id].[hash].js',
  },
  devServer: {
    open: true,
    host: 'localhost',
    historyApiFallback: true, // 解决本地开发browserRouter 404问题
  },
  resolveLoader: {
    modules: ['node_modules', './src/loader'], // 引入自定义loader路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CustomPlugin(),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        // ts 文件处理
        test: /\.(ts|tsx)$/i,
        loader: 'ts-loader',
        exclude: ['/node_modules/', '/dist/'],
        include: path.join(__dirname, 'src'),
      },
      {
        // less-css文件处理
        test: /\.less$/i,
        use: [
          stylesHandler,
          'css-loader',
          'postcss-loader',
          'less-loader',
          'customLoader',
        ],
      },
      {
        // webpack5 内置资源处理
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
        generator: {
          filename: '[name][hash:8][ext]',
        },
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    // 自动匹配路径  ... 表示默认配置 ''.js', '.json', '.wasm''
    extensions: ['.tsx', '.ts', '.jsx', '...'],
    // 路径别名
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  // 排除打包库
  externals: {},
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
    config.plugins.push(new MiniCssExtractPlugin())
  } else {
    config.devtool = 'source-map'
    config.mode = 'development'
  }
  return config
}

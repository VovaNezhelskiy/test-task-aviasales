const webpack = require('webpack');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].js',
    publicPath: '/',
  },
  resolve: { extensions: ['.js', '.jsx', '.css'] },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    hot: true,
    port: 9000,
    proxy: {
      '/api': {
        target: 'https://front-test.beta.aviasales.ru',
        pathRewrite: { '^/api': '' },
        secure: false,
        changeOrigin: true,
      },
    },
  },
};

const baseLoaders = {
  js: [
    {
      test: /.js$$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
    {
      test: /.jsx?$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    },
  ],
  css: [
    {
      test: /.css$/,
      use: [
        'style-loader',
        { loader: 'css-loader', options: { importLoaders: 1 }},
        'postcss-loader',
      ]
    }
  ],
  img: [
    {
      test: /.svg$/,
      use: ['@svgr/webpack'],
    }
  ],
};

const basePlugins = [
  new CleanWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    favicon: './public/favicon.png',
  })
];

module.exports = {
  baseConfig,
  baseLoaders,
  basePlugins,
};

const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.config.base');

const {
  baseConfig,
  baseLoaders,
  basePlugins,
} = baseWebpackConfig;

module.exports = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    filename: '[name].js',
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      ...baseLoaders.js,
      ...baseLoaders.css,
      ...baseLoaders.img,
    ]
  },
  plugins: [
    ...basePlugins,
    new webpack.HotModuleReplacementPlugin({}),
  ]
};

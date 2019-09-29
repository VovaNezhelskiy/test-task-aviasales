const baseWebpackConfig = require('./webpack.config.base');

module.exports = {
  ...baseWebpackConfig.baseConfig,
  mode: 'production',
  module: {
    rules: [
      ...baseWebpackConfig.baseLoaders.js,
      ...baseWebpackConfig.baseLoaders.css,
      ...baseWebpackConfig.baseLoaders.img,
    ],
  },
  plugins: [
    ...baseWebpackConfig.basePlugins,
  ],
};

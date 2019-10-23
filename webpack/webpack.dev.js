const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'lnline-source-map',
  devServer: {
    contentBase: '../dist',
  },
})
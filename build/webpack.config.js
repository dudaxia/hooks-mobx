const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const devConfig = require('./webpack.dev.config')
const porductionConfig = require('./webpack.production.config')

module.exports = (env, argv) => {
  let config = argv.mode === 'development' ? devConfig : porductionConfig
  return merge(baseConfig, config)
}




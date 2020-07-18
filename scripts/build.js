const webpack = require('webpack')
const paths = require('../config/paths')
const serverConfig = require('../config/webpack.server.config')
const clientConfig = require('../config/webpack.client.config')
const path = require('path')
const fsextra = require('fs-extra')

fsextra.emptyDirSync(path.join(paths.clientBuildDir, 'static'))
process.env.NODE_ENV = 'production'

const webpackStatOptions = {
  all: false,
  buildAt: true,
  colors: true,
  errorDetails: true,
  errors: true,
  performance: true,
  warnings: true,
  timings: true,
  chunks: true,
  chunkSort: true
}

webpack(serverConfig('production')).run(function (error, stats) {
  if (error) {
    console.error(error.message)
    process.exit()
  } else {
    console.log('\x1b[36m%s\x1b[0m', '\nSERVER: ')
    console.log(stats.toString(webpackStatOptions))
  }
})

webpack(clientConfig('production')).run(function (error, stats) {
  if (error) {
    console.error(error.message)
    process.exit()
  } else {
    console.log('\x1b[36m%s\x1b[0m', '\nCLIENT: ')
    console.log(stats.toString(webpackStatOptions))
  }
})

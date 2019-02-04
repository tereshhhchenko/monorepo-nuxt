const { resolve } = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': resolve(process.cwd(), './')
    }
  }
}

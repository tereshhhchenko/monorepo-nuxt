const { resolve } = require('path')
const { Nuxt, Builder } = require('nuxt')
const rimraf = require('rimraf')
const getPort = require('get-port')

module.exports = class NuxtHelpers {
  constructor({ port, host } = {}) {
    this.nuxt = null
    this.port = port
    this.host = host || 'localhost'
  }

  async startNuxt() {
    const rootDir = resolve(process.cwd())
    let config = {}
    try {
      config = require(resolve(rootDir, 'nuxt.config.js'))
    } catch (e) {
      console.error(e)
    }

    if (!this.port) {
      this.port = await getPort()
    }
    this.listening = `http://${this.host}:${this.port}/`
    this.buildDir = `.nuxt-test-${this.port}`

    config.rootDir = rootDir // project folder
    config.srcDir = rootDir
    config.dev = false // production build
    config.mode = 'universal' // Isomorphic application
    config.modern = false
    config.buildDir = this.buildDir
    this.nuxt = new Nuxt(config)
    await new Builder(this.nuxt).build()
    this.nuxt.listen(this.port, this.host)
    console.log('Nuxt is listening at ' + this.listening)
  }

  stopNuxt() {
    this.nuxt.close()
    rimraf.sync(resolve('./', this.buildDir))
    this.nuxt = null;
  }
}






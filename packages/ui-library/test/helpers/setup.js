/**
/*  Wow, that's a hack!
/*  See TROUBLESHOOTING.md issue #1 for details
**/
require('jsdom-global')()
window.Date = Date
/** Hack is over */

require('browser-env')()
const hooks = require('require-extension-hooks')
const Vue = require('vue')

Vue.config.productionTip = false

hooks('vue')
  .plugin('vue')
  .push()
hooks(['vue', 'js'])
  .plugin('babel')
  .push()

// require('@babel/register')({
//   // extensions: [".js", ".vue"],
//   // Setting this to false will disable the cache.
//   // cache: false,
// 	// These patterns are relative to the project directory (where the `package.json` file lives):
// 	ignore: ['node_modules/**/*','**/node_modules/**/*', 'test/**/*', '**/test/**/*', '**/*.spec.js']
// });

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
  .exclude(({filename}) => {
    if (filename.includes('node_modules') || filename.includes('alias.js') || filename.includes('coverage-require-all.js')) {
      return true
    }
    console.log(filename)
    return false
  })
  .plugin('babel')
  .push()


const requireAllFromDir = require('./coverage-require-all.js')

requireAllFromDir('components')
requireAllFromDir('pages')

require('@babel/register')({
  ignore: [
    'node_modules/**/*',
    '**/node_modules/**/*',
    'test/**/*',
    '**/test/**/*',
    '**/*.spec.js',
    '**/alias.js',
    '**/.babelrc.js'
  ]
})

/**
/*  Wow, that's a hack!
/*  See TROUBLESHOOTING.md issue #1 for details
**/
require('jsdom-global')()
window.Date = Date
/** Hack is over */

require('browser-env')()
const hooks = require('require-extension-hooks')

hooks('vue')
  .plugin('vue')
  .push()

hooks(['vue', 'js'])
  .exclude(({ filename }) => {
    if (
      filename.includes('node_modules') ||
      filename.includes('config') ||
      filename.includes('.babelrc.js')
    ) {
      return true
    }
    // console.log(filename)
    return false
  })
  .plugin('babel')
  .push()

const requireAllFromDir = require('./coverage-require-all.js')

requireAllFromDir('components')
requireAllFromDir('pages')

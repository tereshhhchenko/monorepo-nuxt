const fs = require('fs')
const path = require('path')

module.exports = (dirName) => {
  const dir = fs.readdirSync(dirName).filter(file => file.match(/[.js|.vue]$/))
  dir.forEach(file => require(path.join(process.cwd(), dirName, file)))
}

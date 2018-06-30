#!/usr/bin/env node

const brreg = require('brreg')
const getHelpText = require('./lib/getHelpText')
const pkg = require('./package.json')
const query = process.argv[2]
var format = 'yaml'

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

if (process.argv[3] && (process.argv[3].indexOf('-f') !== -1 || process.argv[3].indexOf('--format') !== -1)) {
  format = process.argv[3].split('=')[1]
}

brreg({query: query, format: format})
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })

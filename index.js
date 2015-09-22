#!/usr/bin/env node
'use strict'

var brreg = require('brreg')
var getHelpText = require('./lib/getHelpText')
var pkg = require('./package.json')
var query = process.argv[2]
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

brreg({query: query, format: format}, function (err, data) {
  if (err) {
    console.error(err)
  } else {
    console.log(data)
  }
})

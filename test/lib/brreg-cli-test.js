const exec = require('child_process').execFile
const tap = require('tap')
const getHelpText = require('../../lib/getHelpText')
const pkgVersion = require('../../package.json').version

tap.test('It returns helptext with -h flag', function helpTextWithH (test) {
  exec('./index.js', ['-h'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns helptext with --help flag', function helpTextWithH (test) {
  exec('./index.js', ['--help'], function helpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns version with -v flag', function versionWithV (test) {
  exec('./index.js', ['-v'], function versionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns error on error', function testError (test) {
  exec('./index.js', ['npmlovesyou-do-you-love-npm', '--format=cucumber'], function versionWithV (error, stdout, stderr) {
    if (error) {
      throw error
    }
    test.ok(stderr.toString().trim(), 'Error OK')
    test.end()
  })
})

tap.test('It returns data', function testError (test) {
  exec('./index.js', ['Pythonia'], function versionWithV (error, stdout, stderr) {
    if (error) {
      throw error
    }
    test.ok(stdout.toString().trim(), 'Data OK')
    test.end()
  })
})

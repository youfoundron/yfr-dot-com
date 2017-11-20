const { publish } = require('gh-pages')
const { promisify } = require('bluebird')

promisify(publish)('public', {
  src: '**/*',
  branch: 'master',
  repo: 'git@github.com:rongierlach/rongierlach.github.io.git',
  message: `manual publish - ${Date.now()}`
}).then(() => {
  console.log('Successfully published!')
})

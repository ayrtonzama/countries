const path = require('path')
const withSass = require('@zeit/next-sass');
module.exports = withSass({
  reactStrictMode: true,
  cssModules: true,
  
})

module.exports = {
  images: {
    domains: ['flagcdn.com','upload.wikimedia.org'],
  },
  sassOptions: {
  includePaths: [path.join(__dirname, 'styles')],
  },
  }
  
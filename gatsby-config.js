const path = require('path')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    siteUrl: 'https://youfoundron.com'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-purify-css',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-52765720-1' }
    },
    {
      resolve: 'gatsby-source-buttercms-blog',
      options: {
        authToken: 'fac8fdb770c99d13328431879db922ea3efc57db',
        templatePath: path.resolve('./src/templates/post.js'),
        listArgs: { page_size: 999 }
      }
    },
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [
          require('autoprefixer')(),
          require('postcss-import')(),
          require('postcss-simple-vars')()
        ]
      }
    }
  ]
}

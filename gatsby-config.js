const path = require('path')

module.exports = {
  pathPrefix: '/',
  siteMetadata: {
    title: 'Found Him.',
    siteUrl: 'https://youfoundron.com'
  },
  plugins: [
    // analytics & SEO
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-52765720-1' }
    },

    // source blog posts
    {
      resolve: 'gatsby-source-buttercms-blog',
      options: {
        authToken: 'fac8fdb770c99d13328431879db922ea3efc57db',
        templatePath: path.resolve('./src/templates/post.js'),
        listArgs: { page_size: 999 }
      }
    },

    // image optimization
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/content/images`
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    // style optimization
    'gatsby-plugin-purify-css',
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

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.youfoundron.com'
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-purify-css',
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: 'gatsby-source-buttercms',
    //   options: {
    //     authToken: 'fac8fdb770c99d13328431879db922ea3efc57db',
    //     contentFields: {
    //
    //     }
    //   }
    // },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: { trackingId: 'UA-52765720-1' }
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

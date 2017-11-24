const slash = require('slash')

/*
 * Implement the Gatsby API “createPages”.
 * This is called after the Gatsby bootstrap is finished so you have
 * access to any information necessary to programmatically create pages.
 * Will create pages for ButterCMS posts (route : /blog/:slug)
 * https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#creating-pages-in-gatsby-nodejs
 */
module.exports = async (
  { graphql, boundActionCreators },
  { templatePath }
) => {
  const { createPage } = boundActionCreators

  // The “graphql” function allows us to run arbitrary
  // queries against the local ButterCMS graphql schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const queryResult = await graphql(`
    {
      allButterPost {
        edges {
          node {
            slug
            url
            published
            title
            body
            summary
            seo_title
            meta_description
            author {
              first_name
              last_name
              twitter_handle
            }
          }
        }
      }
    }
  `)

  // We want to create a detailed page for each post node.
  // We'll just use the ButterCMS Slug for the slug.
  queryResult.data.allButterPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: slash(templatePath),
      context: {
        slug: edge.node.slug
      }
    })
  })
}

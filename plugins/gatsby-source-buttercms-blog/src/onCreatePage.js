/*
 * Implement the Gatsby API “onCreatePage”.
 * This is called after every page is created.
 * https://www.gatsbyjs.org/docs/creating-and-modifying-pages/#creating-client-only-routes
 */
module.exports = async (
  { page, boundActionCreators },
  { templatePath }
) => {
  const { createPage } = boundActionCreators

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/blog/)) {
    page.matchPath = '/blog/:slug'

    // Update the page
    createPage(page)
  }
}

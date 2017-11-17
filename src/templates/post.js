import React from 'react'

const PostTemplate = props => {
  return <h1>{props.data.butterPost.title}</h1>
}

export default PostTemplate

// The post template's GraphQL query. Notice the "slug"
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query PostBySlug ($slug: String!) {
    # select the post which equals this slug
    butterPost(slug: { eq: $slug }) {
      # specify the fields from the post we need
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
      }
    }
  }
`

import React from 'react'
import Helmet from 'react-helmet'

import shareMeta from '../content/shareMeta'
import monthNames from '../content/monthNames'
import postBodyToComponent from '../util/postBodyToComponent'
import Container from '../components/Container'

const PostTemplate = ({data: {butterPost: post}}) => {
  const datetime = new Date(post.published)
  const DD = datetime.getDate()
  const MMMM = monthNames[datetime.getMonth()]
  const YYYY = datetime.getFullYear()
  return (
    <article>
      <Helmet>
        <title>{post.seo_title}</title>
        <meta name='description' content={post.meta_description} />
        {/* Facebook open graph meta */}
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.summary} />
        <meta property='og:url' content={`https://youfoundron.com/blog/${post.slug}`} />
        <meta property='og:image' content={post.featured_image || shareMeta.facebook.image} />
        {/* Twitter card meta */}
        <meta property='twitter:card' content={post.featured_image ? 'summary_large_image' : 'summary'} />
        <meta property='twitter:site' content={shareMeta.twitter.site} />
        <meta property='twitter:creator' content={post.author.twitter_handle || shareMeta.twitter.site} />
        <meta property='twitter:description' content={post.summary} />
        <link ref='canonical' href={`https://youfoundron.com/blog/${post.slug}`} />
      </Helmet>
      <header className='bg-gold sans-serif pv4 pv5-ns'>
        <Container>
          <div className='mw7 center '>
            <time className='f6 mb2 dib ttu tracked'>
              <small>{`${DD} ${MMMM}, ${YYYY}`}</small>
            </time>
            <h1 className='f2 f1-m f-headline-l lh-title mv0'>
              <span className='bg-near-black lh-copy near-white pa1 tracked-tight'>
                {post.title}
              </span>
            </h1>
            <h2 className='f4 f3-ns fw1 georgia i'>
              {post.summary}
            </h2>
            <h3 className='f6 ttu tracked near-black mb0'>
              By {post.author.first_name} {post.author.last_name}
            </h3>
          </div>
        </Container>
      </header>
      <section className='pv3 pv4-ns'>
        <Container>
          <div className='bg-near-white georgia mw7 center'>
            { postBodyToComponent(post.body) }
          </div>
        </Container>
      </section>
    </article>
  )
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
        twitter_handle
      }
    }
  }
`

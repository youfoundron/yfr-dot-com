import React from 'react'
import Link from 'gatsby-link'

import { head } from '../content/blog'
import Head from '../components/Head'
import Container from '../components/Container'

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

const BlogPage = ({data: {allButterPost: {edges}}}) => (
  <Container>
    <Head {...head} />
    <section className='pv5 center mw7-ns'>
      <h1 className='sans-serif'>Blog</h1>
      <hr />
      <ol className='list pl0'>
        {edges.map(({node: {slug, title, summary, published}}) => {
          const datetime = new Date(published)
          const DD = datetime.getDate()
          const MM = datetime.getMonth()
          const MMMM = monthNames[MM]
          const YYYY = datetime.getFullYear()
          return (
            <li key={slug}>
              <Link
                to={`/blog/${slug}`}
                className='flex flex-row justify-between items-center link near-white hover-gold'
              >
                <div className='pv2 mw-60'>
                  <h2 className='f3 mb1'>
                    <span className='bg-near-black lh-copy pa1 tracked-tight'>{title}</span>
                  </h2>
                  <p className='georgia dn db-ns i near-black mt2'>{summary}</p>
                </div>
                <div className='flex flex-row nowrap'>
                  <p className='dn db-ns near-black hover-near-black tr'>
                    &nbsp;― {`${DD} ${MMMM}, ${YYYY}`}
                  </p>
                  <p className='db dn-ns near-black hover-near-black tr'>
                    &nbsp;― {`${DD}/${MM}/${YYYY}`}
                  </p>
                </div>
              </Link>
            </li>
          )
        })}
      </ol>
    </section>
  </Container>
)

export default BlogPage

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query AllPost {
    allButterPost {
      edges {
        node {
          slug
          title
          summary
          published
        }
      }
    }
  }
`

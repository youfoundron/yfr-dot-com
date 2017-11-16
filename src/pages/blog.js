import React from 'react'

import { head } from '../content/blog'
import Head from '../components/Head'
import Container from '../components/Container'

const BlogPage = () => (
  <Container>
    <Head {...head} />
    <section className='pv5 center measure georgia'>
      <h1 className='sans-serif'>Blog</h1>
      <hr />

    </section>
  </Container>
)

export default BlogPage

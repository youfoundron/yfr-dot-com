import React from 'react'
// import Link from 'gatsby-link'

import { head } from '../content/home'
import Head from '../components/Head'
import Container from '../components/Container'

const HomePage = () => (
  <Container>
    <Head {...head} />
    <section className='pv5 center measure georgia'>
      <h1 className='sans-serif'>Found Me.</h1>
      <hr />

    </section>
  </Container>
)

export default HomePage

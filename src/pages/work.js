import React from 'react'

import { head } from '../content/work'
import Head from '../components/Head'
import Container from '../components/Container'

const WorkPage = () => (
  <Container>
    <Head {...head} />
    <section className='pv5 center measure georgia'>
      <h1 className='sans-serif'>Work</h1>
      <hr />

    </section>
  </Container>
)

export default WorkPage

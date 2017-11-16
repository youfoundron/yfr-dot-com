import React from 'react'

import { head } from '../content/contact'
import Head from '../components/Head'
import Container from '../components/Container'

const ContactPage = () => (
  <Container>
    <Head {...head} />
    <section className='pv5 center measure georgia'>
      <h1 className='sans-serif'>Contact</h1>
      <hr />

    </section>
  </Container>
)

export default ContactPage

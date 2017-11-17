import React from 'react'

import { head } from '../content/contact'
import Head from '../components/Head'
import Container from '../components/Container'
import ContactForm from '../components/ContactForm'

const ContactPage = () => (
  <Container>
    <Head {...head} />
    <section className='pv5 center measure'>
      <h1 className='sans-serif'>Contact</h1>
      <hr />
      <ContactForm />
    </section>
  </Container>
)

export default ContactPage

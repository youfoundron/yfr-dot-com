import React from 'react'
import Link from 'gatsby-link'

import { head } from '../content/home'
import Head from '../components/Head'
import Socials from '../components/Socials'
import Container from '../components/Container'

const Copy = props => (
  <p className='f5 f4-ns lh-copy' {...props} />
)

const Callout = props => (
  <Link className='sans-serif link fw9 black hover-gold' {...props} />
)

const HomePage = () => (
  <Container>
    <Head {...head} />
    <section className='pv5 center measure georgia'>
      <h1 className='sans-serif'>Found Me.</h1>
      <hr />
      <Copy>
        I'm a Chicago based software developer, currently writing web apps and smart contracts on Ethereum.
      </Copy>
      <Copy>
        I've done varied <Callout to='/work'>work</Callout> for some pretty interesting clients.
      </Copy>
      <Copy>
        Sparingly, I may <Callout to='/blog'>write</Callout> about programming and related topics.
      </Copy>
      <Copy>
        If you're interested in working together, or just feel like connecting, let's <Callout to='/contact'>get in touch</Callout>.
      </Copy>
      <Socials />
    </section>
  </Container>
)

export default HomePage

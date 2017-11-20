import React from 'react'

import Container from '../components/Container'
import FadeInUp from '../components/FadeInUp'

const NotFound = () => (
  <Container>
    <FadeInUp>
      <section className='pv5 measure center'>
        <h1 className='tc tracked-tight f-headline lh-solid mb0'>404</h1>
        <p className='tc georgia f5 f4-ns lh-copy'>Nothing to see here!</p>
      </section>
    </FadeInUp>
  </Container>
)

export default NotFound

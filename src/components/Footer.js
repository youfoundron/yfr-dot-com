import React from 'react'
import Link from 'gatsby-link'

import Container from './Container'

const Footer = () => (
  <footer className='bg-near-black white-60 pv4 pv5-ns'>
    <Container className='flex flex-column'>
      <div className='flex-column mv2 mv0-ns'>
        <div className='flex flex-column flex-row-ns justify-between'>
          <p className='f7 mv0 mv2-ns'>
            © {(new Date()).getFullYear()} Ron Gierlach
          </p>
          <p className='tr-ns f7 mv3 mv2-ns'>
            <Link to='/' className='link white-60 dim'>Home</Link>
            &nbsp;/&nbsp;
            <Link to='/work' className='link white-60 dim'>Work</Link>
            &nbsp;/&nbsp;
            <Link to='/blog' className='link white-60 dim'>Blog</Link>
            &nbsp;/&nbsp;
            <Link to='/contact' className='link white-60 dim'>Contact</Link>
          </p>
        </div>
        <p className='f7 mv0 mv2-ns'>
          <a className='link white-80 dim' href='https://github.com/rongierlach/yfr-dot-com' target='_blank'>Site</a>
          &nbsp;built with&nbsp;
          <a className='link white-80 dim' href='https://www.gatsbyjs.org/' target='_blank'>Gatsby</a>
          ,&nbsp;
          <a className='link white-80 dim' href='http://tachyons.io/' target='_blank'>Tachyons</a>
          &nbsp;and&nbsp;
          <a className='link white-80 dim' href='http://buttercms.com/' target='_blank'>ButterCMS</a>
        </p>
      </div>
    </Container>
  </footer>
)

export default Footer

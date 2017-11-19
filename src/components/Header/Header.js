import React, { Component } from 'react'
import Link from 'gatsby-link'

import Nav from './Nav'
import MobileNav from './MobileNav'
import Hamburger from './Hamburger'
import Container from '../Container'
import ZapSVG from '../../content/images/zap-v2.svg'

class Header extends Component {
  state = { open: false }

  closeNav = () => {
    this.setState({ open: false })
  }

  toggleNav = e => {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }

  render () {
    const { open } = this.state

    return (
      <header className='bg-near-black flex-column w-100 shadow-3-ns overflow-y-hidden'>
        <Container className='flex flex-row wrap justify-start items-center pv3 bg-inherit relative z-1'>
          <div className='flex-auto w-third dn-ns' />
          <div className='flex-auto w-third tc tl-ns'>
            <Link to='/' onClick={this.closeNav} className='link near-white hover-gold f3 ttu tracked b'>
              <img className='v-mid dib m-auto' style={{width: '2.5rem', height: '2.5rem'}} src={ZapSVG} />
            </Link>
          </div>
          <div className='flex-auto w-third dn-ns relative tr pr3'>
            <Hamburger open={open} onClick={this.toggleNav} />
          </div>
          <Nav className='dn flex-ns flex-row' />
        </Container>
        { open &&
          <div
            onClick={this.closeNav}
            className='db w-100 h-100 top-0 left-0 absolute'
          />
        }
        <MobileNav open={open} onNavigate={this.closeNav} />
      </header>
    )
  }
}

export default Header

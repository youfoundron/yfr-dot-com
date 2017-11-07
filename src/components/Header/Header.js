import React, { Component } from 'react'
import Link from 'gatsby-link'
// import { withState } from 'recompose'

import Nav from './Nav'
import Hamburger from './Hamburger'

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
      <header className='bg-near-black flex-column fixed absolute w-100 shadow-3'>
        <div className='flex flex-row wrap pa3 ph5-m justify-between items-center'>
          <div className='flex-auto w-third dn-ns'  />
          <div className='flex-auto w-third tc tl-ns'>
            <Link to='/' className='link white hover-gold f3 ttu tracked b'>Home</Link>
          </div>
          <div className='flex-auto w-third dn-ns tr relative'>
            <Hamburger open={open} onClick={this.toggleNav} />
          </div>
          <Nav className='dn flex-ns flex-row' />
        </div>
        { open && <Nav className='flex dn-ns flex-column'/> }
      </header>
    )
  }
}

export default Header

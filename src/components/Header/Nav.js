import React from 'react'
import Link from 'gatsby-link'

const navLinkClass = `
  flex-auto link
  near-white hover-gold b
  tc ttu tracked
  f3 f5-ns
  pv3
  ml4-ns
  b--dark-gray bt b--none-ns
`

const Nav = props => (
  <nav {...props}>
    <Link to='/work' className={navLinkClass}>
      Work
    </Link>
    <Link to='/blog' className={navLinkClass}>
      Blog
    </Link>
    <Link to='/contact' className={navLinkClass}>
      Contact
    </Link>
  </nav>
)

export default Nav

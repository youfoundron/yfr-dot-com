import React from 'react'
import Link from 'gatsby-link'

const paths = [
  'work',
  'blog',
  'contact'
]

const navLinkClass = `
  flex-auto link
  near-white hover-gold b
  tc ttu tracked
  f3 f5-ns
  pv3 ml4-ns
  b--dark-gray bt b--none-ns
`

const Nav = ({ onNavigate, ...props }) => (
  <nav {...props}>
    {paths.map(path => (
      <Link
        key={path}
        to={`/${path}`}
        onClick={onNavigate}
        className={navLinkClass}
      >
        {path}
      </Link>
    ))}
  </nav>
)

export default Nav

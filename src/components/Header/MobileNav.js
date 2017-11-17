import React from 'react'
import { Motion, spring } from 'react-motion'

import Nav from './Nav'

const MobileNav = ({ open, ...props }) => (
  <Motion
    style={{ offsetY: spring(open ? 0 : -100) }}
  >{({ offsetY }) => (
    <Nav
      style={{ transform: `translateY(${offsetY}%)` }}
      className='flex dn-ns flex-column w-100 absolute z-0 bg-inherit shadow-3'
      {...props}
    />
  )}</Motion>
)

export default MobileNav

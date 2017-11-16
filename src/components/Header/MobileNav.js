import React from 'react'
import { Transition } from 'react-transition-group'

import Nav from './Nav'

const duration = 150
const defaultStyle = {
  transform: 'translateX(100%)',
  transition: `transform ${duration}ms ease-in-out`
}
const transitionStyles = {
  entered: { transform: 'translateX(0%)' },
  entering: { transform: 'translateX(100%)' }
}

const MobileNav = ({ open, ...props }) => (
  <Transition
    in={open}
    timeout={duration}
  >{(state) => (
    <Nav
      style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}
      className={`
        flex dn-ns flex-column
        w-100
        fixed
        bg-inherit
      `}
      {...props}
    />
  )}</Transition>
)

export default MobileNav

import React from 'react'
import { Transition } from 'react-transition-group'

import Nav from './Nav'

const duration = 150
const defaultStyle = {
  opacity: 0,
  transform: 'translateY(-100%)',
  transition: `
    opacity ${duration}ms ease-in-out,
    transform ${duration}ms ease-in-out
  `,
  pointerEvents: 'none'
}
const transitionStyles = {
  entering: { opacity: 0, transform: 'translateY(-100%)' },
  entered: { opacity: 1, transform: 'translateY(0%)', pointerEvents: 'all' }
}

const MobileNav = ({ open, ...props }) => (
  <Transition
    in={open}
    timeout={duration}
    className='z-0'
  >{(state) => (
    <Nav
      style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}
      className={`
        flex dn-ns flex-column
        w-100 absolute
        z-0 bg-inherit shadow-3
      `}
      {...props}
    />
  )}</Transition>
)

export default MobileNav

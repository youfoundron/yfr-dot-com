import React from 'react'

const Hamburger = ({ open, ...props }) => (
  <button
    className={`
      mr3
      outline-0
      hamburger hamburger--squeeze
      ${open ? 'is-active' : ''}
    `}
    type='button'
    {...props}
  >
    <span className='haumburger-box'>
      <span className='hamburger-inner' />
    </span>
  </button>
)

export default Hamburger

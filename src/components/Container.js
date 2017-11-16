import React from 'react'

const Container = ({ className, ...props }) => (
  <div
    className={`ph3 ph5-m ph6-l mw9 center ${className}`}
    {...props}
  />
)

export default Container

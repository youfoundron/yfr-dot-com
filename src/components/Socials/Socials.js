import React from 'react'

import GitHubSVG from './GitHubSVG'
import CodePenSVG from './CodePenSVG'
import LinkedInSVG from './LinkedInSVG'

const Socials = () => (
  <section className='pv4 ph3 tc'>
    <a
      className='near-black grow dib mh3'
      href='https://github.com/rongierlach'
      target='_blank'
      title='GitHub'
    ><GitHubSVG /></a>
    <a
      className='near-black grow dib mh3'
      href='https://codepen.io/youfoundron'
      target='_blank'
      title='CodePen'
    ><CodePenSVG /></a>
    <a
      className='near-black grow dib mh3'
      href='https://www.linkedin.com/in/rongierlach'
      target='_blank'
      title='LinkedIn'
    ><LinkedInSVG /></a>
  </section>
)

export default Socials

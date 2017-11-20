import React from 'react'
import Img from 'gatsby-image'

const Project = ({title, url, description, sizes, index}) => (
  <li className={`flex flex-column flex-row-ns mb3 b--black-20 ${index ? 'bt pt4' : 'pt3'}`}>
    <div className='pr3-ns mb0 w-100 w-third-ns'>
      <a href={url} target='_blank' className='link near-white hover-gold w-100 dt sans-serif'>
        <Img
          className='db'
          title={title}
          alt={title}
          sizes={sizes}
        />
        <h3 className='f4 f5-ns lh-title tc tr-ns'>
          <span className='bg-near-black lh-copy pa1 tracked-tight'>
            {title}
          </span>
        </h3>
      </a>
    </div>
    <div
      className='w-100 w-two-thirds-ns pl3-ns pt0 f6 f5-l lh-copy near-black georgia'
      dangerouslySetInnerHTML={{__html: description}}
    />
  </li>
)

export default Project

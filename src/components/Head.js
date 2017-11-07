import React from 'react'
import Helmet from 'react-helmet'

const Head = ({title, meta, links}) => (
  <Helmet>
    <title>{title}</title>
    {meta.map((props, i) => <meta {...props} key={i} />)}
    {links.map((props, i) => <link {...props} key={i} />)}
  </Helmet>
)

export default Head

import React from 'react'

import { head, body } from '../content/work'
import Head from '../components/Head'
import Container from '../components/Container'
import Project from '../components/Project'

const WorkPage = ({ data }) => (
  <Container>
    <Head {...head} />
    <section className='pv5 georgia mw7 center'>
      <h1 className='sans-serif'>Work</h1>
      <hr />
      <ol className='list pl0'>
        {body.projects.map(({key, ...props}, i) => (
          <Project
            key={key}
            index={i}
            sizes={data[key].sizes}
            {...props}
          />
        ))}
      </ol>
    </section>
  </Container>
)

export default WorkPage

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query ResolutionsQuery {
    icostats: imageSharp(id: { regex: "/icostats/" }) {
      sizes(maxWidth: 447) {
        ...GatsbyImageSharpSizes
      }
    }
    porsche: imageSharp(id: { regex: "/porsche/" }) {
      sizes(maxWidth: 447) {
        ...GatsbyImageSharpSizes
      }
    }
    sonos: imageSharp(id: { regex: "/sonos/" }) {
      sizes(maxWidth: 447) {
        ...GatsbyImageSharpSizes
      }
    }
    nike: imageSharp(id: { regex: "/nike/" }) {
      sizes(maxWidth: 447) {
        ...GatsbyImageSharpSizes
      }
    }
    modestmouse: imageSharp(id: { regex: "/modestmouse/" }) {
      sizes(maxWidth: 447) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`

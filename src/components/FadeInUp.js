import React, { cloneElement, Component } from 'react'
import PropTypes from 'prop-types'
import { Motion, spring } from 'react-motion'

const Animation = ({ children, play }) => (
  <Motion
    style={{
      opacity: spring(play ? 1 : 0),
      offsetY: spring(play ? 0 : 20)
    }}
  >{({opacity, offsetY}) => cloneElement(children, {
    style: {
      opacity,
      transform: `translateY(${offsetY}px)`
    }
  })}</Motion>
)

class FadeInUp extends Component {
  static propTypes = { children: PropTypes.element }
  state = { isMounted: false }
  componentDidMount () { this.setState({isMounted: true}) }
  render () {
    return (
      <Animation play={this.state.isMounted}>
        { this.props.children }
      </Animation>
    )
  }
}

export default FadeInUp

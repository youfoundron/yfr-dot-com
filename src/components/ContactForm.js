import React, { Component } from 'react'

class ContactForm extends Component {
  state = { submitted: false }

  handleSubmit = e => {
    this.setState({ submitted: true })
  }

  render () {
    if (this.state.submitted) {
      return (
        <div>
          <h1
            key={0}
            className='tracked-tight f-headline lh-solid mb0 tc'
          >Thanks!</h1>
          <p
            key={1}
            className='georgia f4-ns lh-copy tc'
          >We'll be in touch shortly.</p>
        </div>
      )
    }
    return (
      <form
        method='POST'
        action='http://formspree.io/rongierlach@gmail.com'
        onSubmit={this.handleSubmit}
      >
        <label className='f6 b db mb2'>
          Name <span className='normal black-60'>(optional)</span>
        </label>
        <input
          name='name'
          type='text'
          className='outline-0 input-reset ba b--black-20 pa2 mb2 db w-100 br0 georgia'
          autoFocus
        />
        <label className='f6 b db mb2'>Email</label>
        <input
          required
          name='email'
          type='email'
          className='outline-0 input-reset ba b--black-20 pa2 mb2 db w-100 br0 georgia'
        />
        <label className='f6 b db mb2'>Message</label>
        <textarea
          required
          name='message'
          className='input-reset outline-0 border-box ba b--black-20 pa2 mb3 br0 db w-100 h4 mw-100 georgia'
        />
        <button
          type='submit'
          className='button-reset link pointer tracked sans-serif f4 b pa2 mb3 w-100 ttu bw3 br0 near-white hover-gold bg-near-black b--solid b--near-black hover-bg-near-black'
        >Submit</button>
      </form>
    )
  }
}

export default ContactForm

import React from 'react'
import Scrollbar from 'react-perfect-scrollbar'
import { TransitionGroup } from 'react-transition-group'

import '../styles/index.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <Scrollbar className='sans-serif near-black bg-near-white'>
    <div className='flex flex-column flex-auto min-vh-100'>
      <Header />
      <TransitionGroup
        component='main'
        className='flex-auto'
      >
        { children() }
      </TransitionGroup>
      <Footer />
    </div>
  </Scrollbar>
)

export default Layout

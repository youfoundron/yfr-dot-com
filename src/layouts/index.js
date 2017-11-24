import React from 'react'

import '../styles/index.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({ children }) => (
  <div className='flex flex-column flex-auto min-vh-100 sans-serif near-black bg-near-white'>
    <Header />
    <main className='flex-auto'>
      { children() }
    </main>
    <Footer />
  </div>
)

export default Layout

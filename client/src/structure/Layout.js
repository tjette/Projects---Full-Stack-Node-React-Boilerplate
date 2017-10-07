import React from 'react'
import Main from './Main'
import Header from './header/Header'
import Footer from './Footer'

const Layout = (props) => {
  console.log('UserProvider:', props.userData)
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Layout

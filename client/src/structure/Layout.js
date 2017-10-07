import React from 'react'
import Main from './Main'
import Header from './header/Header'
import Footer from './Footer'

const Layout = (props) => {
  return (
    <div>
      <Header userData={props.userData} />
      <Main userData={props.userData} />
      <Footer userData={props.userData} />
    </div>
  )
}

export default Layout

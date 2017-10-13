import React from 'react'
import Main from './Main'
import Header from './header/Header'
import Footer from './Footer'
import injectSheet from 'react-jss'

const styles = {
  '@global': {
    body: {
      margin: 0
    }
  }
}
const enhancer = injectSheet(styles)

const Layout = (props) => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default enhancer(Layout)

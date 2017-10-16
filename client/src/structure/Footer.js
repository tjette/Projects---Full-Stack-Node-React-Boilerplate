import React from 'react'
import TwitterIcon from 'mdi-react/TwitterIcon'
import FacebookIcon from 'mdi-react/FacebookIcon'
import InstagramIcon from 'mdi-react/InstagramIcon'

const styles = {
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    bottom: 0,
    right: 0,
    left: 0,
    position: 'fixed',
    width: '100%',
    height: 30,
    backgroundColor: 'gray'
  },
  footerTitle: {
    textAlign: 'center'
  }
}
const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <TwitterIcon />
        <FacebookIcon />
        <InstagramIcon />
        <h3>Contact</h3>
      </footer>
    </div>
  )
}

export default Footer

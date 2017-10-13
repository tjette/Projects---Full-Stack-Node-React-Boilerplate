import React from 'react'

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
        <h3>Social Media</h3>
        <h3>About Us</h3>
        <h3>Jobs</h3>
        <h3>Contact</h3>
      </footer>
    </div>
  )
}

export default Footer

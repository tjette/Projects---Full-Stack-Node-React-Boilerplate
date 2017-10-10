import React from 'react'

const styles = {
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 60,
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
        <h3 style={styles.footerTitle}>Tech Job Site</h3>
      </footer>
    </div>
  )
}

export default Footer

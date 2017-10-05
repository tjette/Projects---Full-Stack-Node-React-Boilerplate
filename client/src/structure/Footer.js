import React from 'react'

const styles = {
  footer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5
  }
}
const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <h3>Thanks For Shopping!</h3>
      </footer>
    </div>
  )
}

export default Footer

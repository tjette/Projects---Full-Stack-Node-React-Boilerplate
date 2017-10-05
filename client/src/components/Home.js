import React from 'react'
import SignupPart1 from './SignupPart1'

const styles = {
  header: {
    textAlign: 'center'
  }
}
const Home = () => {
  return (
    <div>
      <h1 style={styles.header}>Tech Job Site</h1>
      <SignupPart1 />
    </div>
  )
}

export default Home

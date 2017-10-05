import React from 'react'
import SignupPart1 from '../components/signup/SignupPart1'
import SignupPart2 from '../components/signup/SignupPart2'

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
      <SignupPart2 />
    </div>
  )
}

export default Home

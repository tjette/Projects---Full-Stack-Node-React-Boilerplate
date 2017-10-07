import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Layout from './structure/Layout'
import UserProvider from './components/UserProvider'

const App = () =>
  <BrowserRouter>
    <UserProvider>
      <Layout />
    </UserProvider>
  </BrowserRouter>

export default App

import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Layout from './structure/Layout'
import UserProvider from './components/providers/UserProvider'
import DataProvider from './components/providers/DataProvider'

const App = () =>
  <BrowserRouter>
    <UserProvider>
      <DataProvider>
        <Layout />
      </DataProvider>
    </UserProvider>
  </BrowserRouter>

export default App

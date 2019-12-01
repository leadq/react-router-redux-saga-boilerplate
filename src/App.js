import './App.scss'

import React from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import { AppHeader, AppContent, AppFooter } from './app/index'

const App = () => {
  return (
    <Layout id='mainLayout'>
      <AppHeader />
      <AppContent>SA</AppContent>
      <AppFooter />
    </Layout>
  )
}

export default App

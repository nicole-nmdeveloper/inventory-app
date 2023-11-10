import React from 'react'
import { Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import history from './services/history'
import Routes from './routes'

import Header from './components/Header'

import GlobalStyle from './styles/GlobalStyles'

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyle />
      <Toaster toastOptions={{ duration: 3000 }} />
    </Router>
  )
}

export default App

import React from 'react'
import { Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import store from './store'
import history from './services/history'
import Routes from './routes'

import Header from './components/Header'

import GlobalStyle from './styles/GlobalStyles'

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <Toaster toastOptions={{ duration: 3000 }} />
      </Router>
    </Provider>
  )
}

export default App

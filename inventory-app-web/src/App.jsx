import React from 'react'
import { Router } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store, { persistor } from './store'
import history from './services/history'
import Routes from './routes'

import Header from './components/Header'

import GlobalStyle from './styles/GlobalStyles'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Header />
          <Routes />
          <GlobalStyle />
          <Toaster toastOptions={{ duration: 5000 }} reverseOrder={true} />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
//import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { store } from './Store/store.js'
import {Provider} from 'react-redux'
import {GoogleOAuthProvider} from '@react-oauth/google'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
   <Provider store={store}>
    <GoogleOAuthProvider>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </GoogleOAuthProvider>
    </Provider>
   
  </React.StrictMode>,
)

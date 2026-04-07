import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from "react-redux"
import store from './core/store/store'

import "normalize-scss"
import './core/styles/index.scss'
import "./core/styles/settings.scss"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
)

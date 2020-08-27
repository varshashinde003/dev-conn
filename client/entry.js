import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Provider } from 'react-redux'
import store from './stores/admin-store'
const root = document.getElementById('root')

if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}

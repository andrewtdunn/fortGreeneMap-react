import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux'
import { addError } from './actions'
import { App } from './components'

const initialState = (localStorage["map-store"]) ?
  JSON.parse(localStorage["map-store"]) :
  sampleData

const saveState = () =>
  localStorage["map-store"] = JSON.stringify(store.getState())

const handleError = error=> {
  store.dispatch(
    addError(error.message)
  )
}

const store = storeFactory(initialState)
store.subscribe(saveState)

window.React = React
window.store = store
window.addEventListener("error", handleError)

render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('react-container')
)

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'
import { Route } from 'react-router'

import reducers from './reducers'

import { Root } from './containers'

export const history = createHistory()
const routerMW = routerMiddleware(history)

const store = createStore(combineReducers({
  ...reducers,
  router: routerReducer
}), applyMiddleware(thunk, routerMW))

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <Root />
  </ConnectedRouter>
</Provider>,
document.getElementById('app'))

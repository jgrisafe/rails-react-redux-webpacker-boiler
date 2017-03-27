import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import configureStore from '../../store/configureStore'
import routes from '../../routes'
import PageWrapper from '../PageWrapper' // eslint-disable-line no-unused-vars
import Home from '../Home' // eslint-disable-line no-unused-vars

const store = configureStore()

class App extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    )
  }
}

export default App

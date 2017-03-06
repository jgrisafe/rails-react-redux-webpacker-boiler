import React, { Component } from 'react';
import { Router, Route, browserHistory, match } from 'react-router'
import { Provider, connect } from 'react-redux'

import configureStore from '../../store/configureStore'
import routes from '../../routes'
import PageWrapper from '../PageWrapper'
import Home from '../Home'

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
      </Provider>
    );
  }
}

export default App
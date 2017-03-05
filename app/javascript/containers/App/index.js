import React, { Component } from 'react';
import { Router, Route, browserHistory, match } from 'react-router'
import { Provider, connect } from 'react-redux'

import configureStore from '../../store/configureStore'

import HomeContainer from '../Home'

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          { routes }
        </Router>
      </Provider>
    );
  }
}

const routes = (
  <Route path="/" component={HomeContainer}>

  </Route>
)

export default App
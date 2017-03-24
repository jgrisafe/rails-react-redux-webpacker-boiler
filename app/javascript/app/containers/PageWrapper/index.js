import React, { Component } from 'react';
import Header from '../../components/Header'
import { connect } from 'react-redux'

import test from '../../actions/test'

class PageWrapper extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(test())
  }

  render() {
    const { children } = this.props
    return (
      <div>
        <Header />
        <div className="container">{ children }</div>
      </div>
    );
  }
}

export default connect()(PageWrapper);
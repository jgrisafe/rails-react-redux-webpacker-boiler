import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Jumbotron } from 'react-bootstrap'

import testThunk from '../../actions/test'

class Home extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(testThunk())
  }

  render() {
    return (
      <div>
        <Jumbotron>
          { this.props.testData }
        </Jumbotron>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state) // eslint-disable-line no-console
  const { test } = state
  return {
    testData: test.test,
  }
}

export default connect(mapStateToProps)(Home)

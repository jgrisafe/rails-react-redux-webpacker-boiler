import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap'

class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          Welcome home!
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import { Router, ShapeRoute } from 'nuomi';
import routes from './routes';

export default class App extends Component {
  render() {
    return (
      <Router>
        <ShapeRoute routes={routes} />
      </Router>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  children: PropTypes.element,
}

class App extends Component {
  con
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;

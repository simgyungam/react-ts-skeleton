import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  children: PropTypes.element,
}

class App extends Component {
  render() {
    const { children } = props;
    return (
      <div>
        {children}
      </div>
    );
  }
  return (

  );
}

export default App;

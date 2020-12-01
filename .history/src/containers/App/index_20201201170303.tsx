import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  children: PropTypes.element,
}

class App extends Component {
  render() {
    return (
      <div>
      {children}
    </div>
    )
  }
  const { children } = props;
  return (

  );
}

export default App;

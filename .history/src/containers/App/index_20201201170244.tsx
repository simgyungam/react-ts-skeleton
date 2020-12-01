import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const propTypes = {
  children: PropTypes.element,
}

class App extends Component: JSX.Element  {
  render() {

  }
  const { children } = props;
  return (
    <div>
      {children}
    </div>
  );
}

export default App;
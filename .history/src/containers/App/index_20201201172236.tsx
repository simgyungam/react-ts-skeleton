import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.scss';

export interface PropTypes {
  children: 
}
const propTypes = {
  children: PropTypes.element,
}

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.scss';

export interface PropTypes {
  children: React.ReactNode,
}

// const propTypes = {
//   children: PropTypes.element,
// }

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

export default App;

import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.scss';

export interface Prop {
  children: React.ReactNode,
}

// const propTypes = {
//   children: PropTypes.element,
// }

class App extends Component<Props, {}> {
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

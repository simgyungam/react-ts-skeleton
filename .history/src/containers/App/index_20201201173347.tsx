import React, { Component } from 'react';
import './style.scss';

export interface Props {
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

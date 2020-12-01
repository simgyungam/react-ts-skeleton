import React, { Component } from 'react';
import './style.scss';

interface Props {
  children: React.ReactNode,
}

class App extends Component<{}, {}> {
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

import React, { Component } from 'react';
import LogoSVG from '@/logo.svg';
import './style.scss';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <img src={LogoSVG} width="100" />
        {children}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import LogoSVG from '@/logo.svg';
import SideBar from '@/components/SideBar';
import '@/styles/theme.scss';
import './style.scss';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="container">
        <img src={LogoSVG} width="150" className="logo" />
        <SideBar />
        {children}
      </div>
    );
  }
}

export default App;

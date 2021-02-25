import React, { Component } from 'react';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import '../../styles/theme.scss';
import styles from './style.scss';

class App extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={styles.container}>
        <section className={styles.header}><Header /></section>
        <section className={styles.sidebar}><SideBar /></section>
        <section className={styles.main}>
          {children}
        </section>
      </div>
    );
  }
}

export default App;

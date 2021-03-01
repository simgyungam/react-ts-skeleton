import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyTypes from 'MyTypes';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import '../../styles/theme.scss';
import styles from './style.scss';

const mapStateToProps = (state: MyTypes.RootState) => ({
  collapsed: state.sidebar.collapsed
});

type Props = ReturnType<typeof mapStateToProps>;

class App extends Component<Props, Props> {
  static getDerivedStateFromProps(nextProps: Props, prevState: Props) {
    const { collapsed } = nextProps;
    if (collapsed !== prevState.collapsed) {
      return { collapsed };
    }
    return null;
  }

  constructor(props: Props) {
    super(props);
    const { collapsed } = props;
    this.state = {
      collapsed
    };
  }

  render() {
    const { children } = this.props;
    const { collapsed } = this.state;

    return (
      <div className={styles.container}>
        <section className={styles.header}><Header /></section>
        <section className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}><SideBar /></section>
        <section className={`${styles.main} ${collapsed ? styles.collapsed : ''}`}>
          {children}
        </section>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(App);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import MyTypes from 'MyTypes';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import { goUcLogin, getToken } from 'uc-lib';
import '../../styles/theme.scss';
import styles from './style.scss';

const mapStateToProps = (state: MyTypes.RootState, props) => ({
  history: props.history,
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

  componentDidMount() {
    const token = getToken();
    if (!token) {
      // goUcLogin();
      console.log('%c!!! 未登录，需跳转到登录页面', 'color: #f00;');
    }
  }

  render() {
    const { children, allProps } = this.props;
    const { collapsed } = this.state;
    console.log('allProps', allProps);

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

export default withRouter(connect(mapStateToProps, null)(App));

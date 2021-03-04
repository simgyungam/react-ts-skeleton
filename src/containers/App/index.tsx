import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import MyTypes from 'MyTypes';
import { History, Location } from 'history';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';
import '../../styles/theme.scss';
import styles from './style.scss';

const mapStateToProps = (state: MyTypes.RootState, props: { history: History, location: Location }) => ({
  location: props.location,
  history: props.history,
  collapsed: state.sidebar.collapsed
});

type Props = ReturnType<typeof mapStateToProps>;

type States = {
  collapsed: boolean;
}

class App extends Component<Props, States> {
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
    const { children, history, location } = this.props;
    const { collapsed } = this.state;

    return (
      <div className={styles.container}>
        <section className={styles.header}><Header /></section>
        <section className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
          <SideBar history={history} location={location} />
        </section>
        <section className={`${styles.main} ${collapsed ? styles.collapsed : ''}`}>
          {children}
        </section>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, null)(App));

import * as React from 'react';
import MyTypes from 'MyTypes';
import { connect } from 'react-redux';
import {
 MenuList,
 MenuItem,
} from '@material-ui/core';
import { toggle as toggleAction } from '@/redux/actions/sidebar';
import CollapseSvg from '@/assets/img/menu-collapse.svg';
import ExpandSvg from '@/assets/img/menu-expand.svg';
import styles from './styles.scss';

const mapStateToProps = (state: MyTypes.RootState) => ({
  collapsed: state.sidebar.collapsed
});

const mapDispatchToProps = {
  toggle: toggleAction
};

type States = ReturnType<typeof mapStateToProps>;

type Props = States & {
  toggle: any;
};

class SideBar extends React.Component<Props, States> {
  static getDerivedStateFromProps (nextProps: Props, prevState: States) {
    const { collapsed } = nextProps;
    if (collapsed !== prevState.collapsed) {
      return { collapsed }
    }
    return null;
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      collapsed: props.collapsed
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggle();
  }

  render() {
    const {
      collapsed,
    } = this.state;

    return (
      <div className={styles.sidebar}>
        <div className={styles.btn}>
          <button onClick={this.handleToggle}>
            <img src={collapsed ? ExpandSvg : CollapseSvg} alt="Collapse menu" />
          </button>
        </div>
        <MenuList className="sidebar-menu">
          <MenuItem>图标菜单</MenuItem>
          <MenuItem>都行菜单</MenuItem>
        </MenuList>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
import * as React from 'react';
import MyTypes from 'MyTypes';
import { connect } from 'react-redux';
import {
 MenuList,
 MenuItem,
} from '@material-ui/core';
import { toggle as toggleAction } from '@/redux/actions/sidebar';
import { History, Location } from 'history';
import CollapseSvg from '@/assets/img/menu-collapse.svg';
import ExpandSvg from '@/assets/img/menu-expand.svg';
import { MENUS } from './menus';
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
  history: History;
  location: Location;
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
    this.computedActive = this.computedActive.bind(this);
  }

  handleToggle(): void {
    this.props.toggle();
  }

  handleJump(path: string): void {
    this.props.history.push(path);
  }

  computedActive(regStr: string): boolean {
    const { location } = this.props;
    const reg = new RegExp(regStr);
    return reg.test(location.pathname);
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
          {MENUS.map(menu => (
            <MenuItem
              key={menu.name}
              className={this.computedActive(menu.reg) ? 'active' : ''}
              onClick={() => this.handleJump(menu.path)}
            >
              {menu.zh}
            </MenuItem>
          ))}
        </MenuList>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
import React, { Component } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import LoGOSvg from '@/assets/img/logo.svg';
import AvatarSvg from '@/assets/img/avatar.svg';
import ArrowSvg from '@/assets/img/arrow-down.svg';
import { removeToken, goUcLogin } from 'uc-lib';
import styles from './style.scss';

type States = {
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
};

class Header extends Component<{}, States> {
  buttonRef: React.RefObject<HTMLButtonElement>;

  constructor(props: {}) {
    super(props)
    this.state = {
      anchorEl: null,
    };
    this.buttonRef = React.createRef();
    this.handleClose = this.handleClose.bind(this);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  handleDropdown() {
    const node = this.buttonRef.current;
    this.setState({ anchorEl: node });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  handleSignOut() {
    console.log('sign out');
    removeToken();
    setTimeout(goUcLogin, 500);
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div className={styles.container}>
        <div className="flex">
          <img src={LoGOSvg} alt="Aqara logo" width="100" />
          <span className={styles.title}>App管理后台</span>
        </div>
        <div className="flex">
          <img src={AvatarSvg} alt="Avatar" width="18" />
          <button className={styles.dropdown} onMouseOver={this.handleDropdown} ref={this.buttonRef}>
            simsim
            <img src={ArrowSvg} alt="Dropdown icon"/>
          </button>
          <Menu
            className="user-dropdown"
            keepMounted
            elevation={0}
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleSignOut}>退出</MenuItem>
          </Menu>
        </div>
      </div>
    )
  }
}

export default Header;

import React from 'react';
import { goUcLogin, getToken } from 'uc-lib';

export const AuthLaunch: React.FC<{}> = props => {
  const token: string | null = getToken();
  if (!token) {
    console.log('重定向');
    // goUcLogin();
    // return null;
  }
  const { children } = props;
  return <div>{children}</div>;
}

export default AuthLaunch;

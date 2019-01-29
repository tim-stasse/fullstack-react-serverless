import React from 'react';
import { AppBar as AdminAppBar } from 'react-admin';
import { UserMenu } from '_containers';

export const AppBar = props => (
  <AdminAppBar {...props} userMenu={<UserMenu />} />
);

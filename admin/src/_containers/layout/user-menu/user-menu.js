import React from 'react';
import { UserMenu as AdminUserMenu } from 'react-admin';
import { ChangePassword } from './change-password';

export const UserMenu = props => (
  <AdminUserMenu {...props}>
    <ChangePassword />
  </AdminUserMenu>
);

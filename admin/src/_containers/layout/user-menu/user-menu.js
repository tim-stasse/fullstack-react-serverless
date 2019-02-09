import React from 'react';
import { UserMenu as AdminUserMenu } from 'react-admin';
import { ChangePassword } from './change-password';
import { VerifyEmail } from './verify-email';

export const UserMenu = props => (
  <AdminUserMenu {...props}>
    <VerifyEmail />
    <ChangePassword />
  </AdminUserMenu>
);

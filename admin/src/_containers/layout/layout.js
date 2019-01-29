import React from 'react';
import { Layout as AdminLayout } from 'react-admin';
import { AppBar } from './app-bar';

export const Layout = props => <AdminLayout {...props} appBar={AppBar} />;

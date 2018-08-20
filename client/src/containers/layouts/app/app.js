// @flow
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routes } from '../../../constants';
import { Home } from '../../pages';
import './app.css';

export const AppLayout = withRouter(() => (
  <main className="app-layout">
    <Switch>
      <Route exact path={routes.app.home} component={Home} />
    </Switch>
  </main>
));

// @flow
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './constants';
import { AppLayout } from './containers';

export const RouteLayout = () => (
  <BrowserRouter>
    <Switch>
      <Route path={routes.app.root} component={AppLayout} />
    </Switch>
  </BrowserRouter>
);

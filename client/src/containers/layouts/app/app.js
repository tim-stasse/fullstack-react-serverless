// @flow
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { routes } from '../../../constants';
import { Home, Grid } from '../../pages';
import { AppNav, Footer } from '../../partials';
import './app.css';

export const AppLayout = withRouter(() => (
  <React.Fragment>
    <AppNav />
    <main className="app-layout">
      <Switch>
        <Route exact path={routes.app.home} component={Home} />
        <Route exact path={routes.app.grid} component={Grid} />
      </Switch>
    </main>
    <Footer />
  </React.Fragment>
));

// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { ApplicationDescription, ApplicationTitle } from './constants';
import { RouteLayout } from './route-layout';
import registerServiceWorker from './register-service-worker';
import './scss/index.css';

const rootComponent = (
  <React.Fragment>
    <Helmet>
      <title>{ApplicationTitle}</title>
      <meta name="description" content={ApplicationDescription} />
    </Helmet>
    <RouteLayout />
  </React.Fragment>
);

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.render(rootComponent, rootElement);
}

registerServiceWorker();

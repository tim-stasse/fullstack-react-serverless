import React from 'react';
import { render } from 'react-dom';
import { Helmet } from 'react-helmet';
import {
  applicationDescription,
  applicationTitle,
  reactSnapUserAgent
} from '_constants';
import { App } from '_containers';
import registerServiceWorker from './register-service-worker';

const rootElement = (
  <React.Fragment>
    <Helmet>
      <title>{applicationTitle}</title>
      <meta name="description" content={applicationDescription} />
    </Helmet>
    <App />
  </React.Fragment>
);

const containerElement = document.getElementById('root');

if (containerElement) {
  render(rootElement, containerElement);
}

if (window.navigator.userAgent !== reactSnapUserAgent) {
  registerServiceWorker();
}

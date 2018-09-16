// @flow
import { loadComponents } from 'loadable-components';
import { constant, invoke } from 'lodash/fp';
import React from 'react';
import type { Element as ReactElement, ElementType } from 'react';
import { hydrate, render } from 'react-dom';
import { Helmet } from 'react-helmet';
import {
  applicationDescription,
  applicationTitle,
  reactSnapUserAgent
} from './constants';
import { RouteLayout } from './route-layout';
import registerServiceWorker from './register-service-worker';
import { branchFuncs } from './utils';
import './scss/index.css';

const rootElement = (
  <React.Fragment>
    <Helmet>
      <title>{applicationTitle}</title>
      <meta name="description" content={applicationDescription} />
    </Helmet>
    <RouteLayout />
  </React.Fragment>
);

const containerElement = document.getElementById('root');

if (containerElement) {
  const renderApp = branchFuncs(
    invoke('hasChildNodes'),
    _ =>
      async function<T: ElementType>(
        element: ReactElement<T>,
        container: Element
      ) {
        await loadComponents();

        hydrate(element, container);
      },
    constant(render)
  )(containerElement);

  renderApp(rootElement, containerElement);
}

if (window.navigator.userAgent !== reactSnapUserAgent) {
  registerServiceWorker();
}

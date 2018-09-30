// @flow
import { loadComponents } from 'loadable-components';
import { constant, invoke } from 'lodash/fp';
import React from 'react';
import { Button } from 'reactstrap';
import { hydrate, render } from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import ReduxToastr, { actions } from 'react-redux-toastr';
import {
  applicationDescription,
  applicationTitle,
  reactSnapUserAgent
} from './constants';
import { RouteLayout } from './route-layout';
import registerServiceWorker from './register-service-worker';
import { configureStore } from './state/store';
import { branchFuncs } from './utils';
import './scss/index.css';

const store = configureStore();

const App = () => (
  <React.Fragment>
    <RouteLayout />
    <ReduxToastr />
  </React.Fragment>
);

const rootElement = (
  <React.Fragment>
    <Helmet>
      <title>{applicationTitle}</title>
      <meta name="description" content={applicationDescription} />
    </Helmet>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>
);

const containerElement = document.getElementById('root');

if (containerElement) {
  const renderApp = branchFuncs(
    invoke('hasChildNodes'),
    constant(async (component, element) => {
      await loadComponents();

      hydrate(component, element);
    }),
    constant(render)
  )(containerElement);

  renderApp(rootElement, containerElement);
}

if (window.navigator.userAgent !== reactSnapUserAgent) {
  registerServiceWorker(() =>
    store.dispatch(
      actions.add({
        type: 'info',
        message: (
          <React.Fragment>
            There is new content available.
            <br />
            <Button
              color="link"
              className="text-no-transform text-dark m-0 p-0 pr-1"
              onClick={() => window.location.reload(true)}>
              Refresh
            </Button>
            to see it.
          </React.Fragment>
        ),
        options: { timeOut: 0, showCloseButton: true }
      })
    )
  );
}

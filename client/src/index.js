import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { ApplicationDescription, ApplicationTitle } from './constants';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootComponent = (
  <React.Fragment>
    <Helmet>
      <title>{ApplicationTitle}</title>
      <meta name="description" content={ApplicationDescription} />
    </Helmet>
    <App />
  </React.Fragment>
);

const rootElement = document.getElementById('root');

ReactDOM.render(rootComponent, rootElement);

registerServiceWorker();

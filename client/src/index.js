import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootComponent = <App />;
const rootElement = document.getElementById('root');

ReactDOM.render(rootComponent, rootElement);

registerServiceWorker();

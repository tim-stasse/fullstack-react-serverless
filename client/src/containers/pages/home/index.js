import loadable from 'loadable-components';

export const Home = loadable(() =>
  import('./home' /* webpackChunkName: "home" */).then(({ Home }) => Home)
);

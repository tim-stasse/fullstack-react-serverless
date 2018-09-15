// @flow
import loadable from 'loadable-components';

export const Grid = loadable(() =>
  import('./grid' /* webpackChunkName: "grid" */).then(({ Grid }) => Grid)
);

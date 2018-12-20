import { flow, map, values } from 'lodash/fp';
import jsonServerProvider from 'ra-data-json-server';
import React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import { routes } from '_constants';

export const App = () => (
  <Admin
    dataProvider={jsonServerProvider('http://jsonplaceholder.typicode.com')}>
    {flow(
      values,
      map(resource => (
        <Resource key={resource} name={resource} list={ListGuesser} />
      ))
    )(routes.resources)}
  </Admin>
);

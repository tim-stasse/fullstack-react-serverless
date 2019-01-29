import { constant, flow, get, map, values } from 'lodash/fp';
import {
  Album as AlbumIcon,
  Book as BookIcon,
  Comment as CommentIcon,
  Group as GroupIcon,
  List as ListIcon,
  PhotoLibrary as PhotoLibraryIcon
} from '@material-ui/icons';
import React from 'react';
import { Admin, Resource } from 'react-admin';
import { Route } from 'react-router-dom';
import { branch, compose, lifecycle, renderNothing } from 'recompose';
import { resources, routes } from '_constants';
import * as containers from '_containers';
import { authProvider, buildDataProvider, i18nProvider } from '_providers';
import { sagas } from '_state';

const icons = {
  Album: AlbumIcon,
  Post: BookIcon,
  Comment: CommentIcon,
  User: GroupIcon,
  Todo: ListIcon,
  Photo: PhotoLibraryIcon
};

export const enhance = compose(
  lifecycle({
    componentDidMount() {
      buildDataProvider()
        .then(dataProvider => this.setState({ dataProvider, loaded: true }))
        .catch(error =>
          this.setState({
            dataProvider: constant({ data: [], total: 0 }),
            error,
            loaded: true
          })
        );
    }
  }),
  branch(({ loaded }) => !loaded, renderNothing)
);

export const Component = ({ dataProvider, error }) => (
  <Admin
    appLayout={containers.Layout}
    authProvider={authProvider}
    customRoutes={[
      <Route
        exact
        path={routes.auth.changePassword}
        component={containers.ChangePassword}
      />,
      <Route
        exact
        noLayout
        path={routes.auth.newPassword}
        component={containers.NewPassword}
      />
    ]}
    customSagas={sagas}
    dashboard={containers.Dashboard}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}>
    {flow(
      values,
      map(resource => (
        <Resource
          key={resource}
          name={resource}
          icon={get(resource)(icons)}
          list={get(`${resource}List`)(containers)}
          edit={error ? undefined : get(`${resource}Edit`)(containers)}
          create={error ? undefined : get(`${resource}Create`)(containers)}
        />
      ))
    )(resources)}
  </Admin>
);

export const App = enhance(Component);

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
import {
  ChangePassword,
  ForgotPassword,
  Login,
  NewPassword,
  ResetPassword,
  VerifyEmail
} from '_containers/auth';
import { Dashboard } from '_containers/dashboard';
import { Layout } from '_containers/layout';
import * as Resources from '_containers/resources';
import { authProvider, buildDataProvider, i18nProvider } from '_providers';
import { reducers, sagas } from '_state';

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
    appLayout={Layout}
    authProvider={authProvider}
    customReducers={reducers}
    customRoutes={[
      <Route
        exact
        path={routes.auth.changePassword}
        component={ChangePassword}
      />,
      <Route
        exact
        noLayout
        path={routes.auth.forgotPassword}
        component={ForgotPassword}
      />,
      <Route
        exact
        noLayout
        path={routes.auth.newPassword}
        component={NewPassword}
      />,
      <Route
        exact
        noLayout
        path={routes.auth.resetPassword}
        component={ResetPassword}
      />,
      <Route exact path={routes.auth.verifyEmail} component={VerifyEmail} />
    ]}
    customSagas={sagas}
    dashboard={Dashboard}
    dataProvider={dataProvider}
    i18nProvider={i18nProvider}
    loginPage={Login}>
    {flow(
      values,
      map(resource => (
        <Resource
          key={resource}
          name={resource}
          icon={get(resource)(icons)}
          list={get(`${resource}List`)(Resources)}
          edit={error ? undefined : get(`${resource}Edit`)(Resources)}
          create={error ? undefined : get(`${resource}Create`)(Resources)}
        />
      ))
    )(resources)}
  </Admin>
);

export const App = enhance(Component);

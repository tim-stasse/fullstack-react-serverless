import { constant } from 'lodash/fp';
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
import { branch, compose, lifecycle, renderNothing } from 'recompose';
import {
  AlbumCreate,
  AlbumEdit,
  AlbumList,
  CommentCreate,
  CommentEdit,
  CommentList,
  Dashboard,
  PhotoCreate,
  PhotoEdit,
  PhotoList,
  PostCreate,
  PostEdit,
  PostList,
  TodoCreate,
  TodoEdit,
  TodoList,
  UserCreate,
  UserEdit,
  UserList
} from '_containers';
import { authProvider, buildDataProvider } from '_providers';

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
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}>
    <Resource
      name="Album"
      icon={AlbumIcon}
      list={AlbumList}
      edit={error ? undefined : AlbumEdit}
      create={error ? undefined : AlbumCreate}
    />
    <Resource
      name="Comment"
      icon={CommentIcon}
      list={CommentList}
      edit={error ? undefined : CommentEdit}
      create={error ? undefined : CommentCreate}
    />
    <Resource
      name="Photo"
      icon={PhotoLibraryIcon}
      list={PhotoList}
      edit={error ? undefined : PhotoEdit}
      create={error ? undefined : PhotoCreate}
    />
    <Resource
      name="Post"
      icon={BookIcon}
      list={PostList}
      edit={error ? undefined : PostEdit}
      create={error ? undefined : PostCreate}
    />
    <Resource
      name="Todo"
      icon={ListIcon}
      list={TodoList}
      edit={error ? undefined : TodoEdit}
      create={error ? undefined : TodoCreate}
    />
    <Resource
      name="User"
      icon={GroupIcon}
      list={UserList}
      edit={error ? undefined : UserEdit}
      create={error ? undefined : UserCreate}
    />
  </Admin>
);

export const App = enhance(Component);

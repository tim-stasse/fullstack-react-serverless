import {
  Album as AlbumIcon,
  Book as BookIcon,
  Comment as CommentIcon,
  Group as GroupIcon,
  List as ListIcon,
  PhotoLibrary as PhotoLibraryIcon
} from '@material-ui/icons';
import React from 'react';
import { Admin, EditGuesser, ListGuesser, Resource } from 'react-admin';
import {
  Dashboard,
  PostCreate,
  PostEdit,
  PostList,
  UserList
} from '_containers';
import { authProvider, dataProvider } from '_providers';

export const App = () => (
  <Admin
    authProvider={authProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}>
    <Resource
      name="albums"
      icon={AlbumIcon}
      list={ListGuesser}
      edit={EditGuesser}
    />
    <Resource
      name="comments"
      icon={CommentIcon}
      list={ListGuesser}
      edit={EditGuesser}
    />
    <Resource
      name="photos"
      icon={PhotoLibraryIcon}
      list={ListGuesser}
      edit={EditGuesser}
    />
    <Resource
      name="posts"
      icon={BookIcon}
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="todos"
      icon={ListIcon}
      list={ListGuesser}
      edit={EditGuesser}
    />
    <Resource
      name="users"
      icon={GroupIcon}
      list={UserList}
      edit={EditGuesser}
    />
  </Admin>
);

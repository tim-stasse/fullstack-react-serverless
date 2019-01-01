import React from 'react';
import { Datagrid, List, ReferenceField, TextField } from 'react-admin';

export const AlbumList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="title" />
      <ReferenceField source="userId" reference="User">
        <TextField source="name" />
      </ReferenceField>
    </Datagrid>
  </List>
);

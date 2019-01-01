import React from 'react';
import {
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  Responsive,
  SimpleList,
  TextField,
  UrlField
} from 'react-admin';

export const PhotoList = props => (
  <List {...props}>
    <Responsive
      small={<SimpleList primaryText={({ title }) => title} />}
      medium={
        <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <UrlField source="url" />
          <TextField source="thumbnailUrl" />
          <ReferenceField source="albumId" reference="Album">
            <TextField source="title" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

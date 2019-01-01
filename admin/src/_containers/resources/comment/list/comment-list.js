import React from 'react';
import {
  Datagrid,
  EditButton,
  EmailField,
  List,
  ReferenceField,
  Responsive,
  SimpleList,
  TextField
} from 'react-admin';

export const CommentList = props => (
  <List {...props}>
    <Responsive
      small={<SimpleList primaryText={({ name }) => name} />}
      medium={
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="body" />
          <ReferenceField source="postId" reference="Post">
            <TextField source="title" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

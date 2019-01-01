import React from 'react';
import {
  BooleanField,
  Datagrid,
  EditButton,
  List,
  ReferenceField,
  Responsive,
  SimpleList,
  TextField
} from 'react-admin';

export const TodoList = props => (
  <List {...props}>
    <Responsive
      small={<SimpleList primaryText={({ title }) => title} />}
      medium={
        <Datagrid>
          <TextField source="id" />
          <TextField source="title" />
          <BooleanField source="completed" />
          <ReferenceField source="userId" reference="User">
            <TextField source="id" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

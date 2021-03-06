import React from 'react';
import {
  Datagrid,
  EditButton,
  EmailField,
  List,
  Responsive,
  SimpleList,
  TextField
} from 'react-admin';

export const UserList = props => (
  <List {...props}>
    <Responsive
      small={<SimpleList primaryText={({ name }) => name} />}
      medium={
        <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <EmailField source="email" />
          <TextField source="phone" />
          <TextField source="address.city" label="City" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

import React from 'react';
import {
  Datagrid,
  EditButton,
  Filter,
  List,
  ReferenceField,
  ReferenceInput,
  Responsive,
  SelectInput,
  SimpleList,
  TextField,
  TextInput
} from 'react-admin';

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = props => (
  <List {...props} filters={<PostFilter />}>
    <Responsive
      small={<SimpleList primaryText={({ title }) => title} />}
      medium={
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton />
        </Datagrid>
      }
    />
  </List>
);

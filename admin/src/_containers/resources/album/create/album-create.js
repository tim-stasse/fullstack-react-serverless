import React from 'react';
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

export const AlbumCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="User">
        <SelectInput optionValue="id" optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
    </SimpleForm>
  </Create>
);

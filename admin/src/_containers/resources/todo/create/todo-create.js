import React from 'react';
import {
  BooleanInput,
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

export const TodoCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <BooleanInput source="completed" />
      <ReferenceInput source="userId" reference="User">
        <SelectInput optionValue="id" optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

import React from 'react';
import {
  Create,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

export const PhotoCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <TextInput source="url" />
      <TextInput source="thumbnailUrl" />
      <ReferenceInput source="albumId" reference="Album">
        <SelectInput optionValue="id" optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

import React from 'react';
import {
  DisabledInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

const AlbumTitle = ({ record }) => {
  return <span>Album {record ? `"${record.title}"` : ''}</span>;
};

export const AlbumEdit = props => (
  <Edit {...props} title={<AlbumTitle />}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <ReferenceInput source="userId" reference="User">
        <SelectInput optionValue="id" optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

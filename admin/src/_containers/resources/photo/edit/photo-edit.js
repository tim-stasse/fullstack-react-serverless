import React from 'react';
import {
  DisabledInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

const PhotoTitle = ({ record }) => {
  return <span>Photo {record ? `"${record.title}"` : ''}</span>;
};

export const PhotoEdit = props => (
  <Edit {...props} title={<PhotoTitle />}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <TextInput source="url" />
      <TextInput source="thumbnailUrl" />
      <ReferenceInput source="albumId" reference="Album">
        <SelectInput optionValue="id" optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

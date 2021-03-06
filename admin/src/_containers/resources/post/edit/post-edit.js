import React from 'react';
import {
  DisabledInput,
  Edit,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = props => (
  <Edit {...props} title={<PostTitle />}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput source="userId" reference="User">
        <SelectInput optionValue="id" optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <LongTextInput source="body" />
    </SimpleForm>
  </Edit>
);

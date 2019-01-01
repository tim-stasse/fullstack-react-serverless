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

const CommentTitle = ({ record }) => {
  return <span>Comment {record ? `"${record.name}"` : ''}</span>;
};

export const CommentEdit = props => (
  <Edit {...props} title={<CommentTitle />}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="email" />
      <LongTextInput source="body" />
      <ReferenceInput source="postId" reference="Post">
        <SelectInput optionValue="id" optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

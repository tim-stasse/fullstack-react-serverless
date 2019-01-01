import React from 'react';
import {
  Create,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

export const CommentCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <LongTextInput source="body" />
      <ReferenceInput source="postId" reference="Post">
        <SelectInput optionValue="id" optionText="title" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);

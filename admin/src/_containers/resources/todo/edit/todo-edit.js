import React from 'react';
import {
  BooleanInput,
  DisabledInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput
} from 'react-admin';

const TodoTitle = ({ record }) => {
  return <span>Todo {record ? `"${record.title}"` : ''}</span>;
};

export const TodoEdit = props => (
  <Edit {...props} title={<TodoTitle />}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="title" />
      <BooleanInput source="completed" />
      <ReferenceInput source="userId" reference="User">
        <SelectInput optionValue="id" optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

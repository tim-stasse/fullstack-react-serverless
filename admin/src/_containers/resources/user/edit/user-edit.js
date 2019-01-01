import React from 'react';
import { DisabledInput, Edit, SimpleForm, TextInput } from 'react-admin';

const UserTitle = ({ record }) => {
  return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = props => (
  <Edit {...props} title={<UserTitle />}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="phone" />
      <TextInput source="address.suite" label="Suite" />
      <TextInput source="address.street" label="Street" />
      <TextInput source="address.city" label="City" />
      <TextInput source="address.zipcode" label="Zipcode" />
      <TextInput source="address.geo.lat" label="Latitude" />
      <TextInput source="address.geo.lng" label="Longitude" />
    </SimpleForm>
  </Edit>
);

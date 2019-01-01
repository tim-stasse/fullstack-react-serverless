import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
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
  </Create>
);

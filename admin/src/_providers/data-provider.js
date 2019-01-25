import Auth from '@aws-amplify/auth';
import { from } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';
import { camelCase, flow, get, invoke, stubObject } from 'lodash/fp';
import { plural, singular } from 'pluralize';
import buildGraphQLProvider from 'ra-data-graphql-simple';
import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE
} from 'react-admin';
import { apiUrl } from '_constants';
import { catchError, pascalCase, then } from '_utils';

const singularPascalCase = prefix => resource =>
  flow(
    singular,
    pascalCase,
    name => `${prefix}${name}`
  )(resource.name);

const singularCamelCase = resource =>
  flow(
    singular,
    camelCase
  )(resource.name);

const pluralPascalCase = resource =>
  flow(
    plural,
    pascalCase,
    name => `all${name}`
  )(resource.name);

export const buildDataProvider = () =>
  buildGraphQLProvider({
    clientOptions: {
      link: from([
        setContext((_, { headers }) =>
          flow(
            invoke('currentSession'),
            then(get('idToken')),
            then(({ jwtToken }) => ({
              headers: { ...headers, Authorization: jwtToken }
            })),
            catchError(stubObject)
          )(Auth)
        ),
        createHttpLink({ uri: apiUrl })
      ])
    },
    introspection: {
      operationNames: {
        [GET_LIST]: pluralPascalCase,
        [GET_ONE]: singularCamelCase,
        [GET_MANY]: pluralPascalCase,
        [GET_MANY_REFERENCE]: pluralPascalCase,
        [CREATE]: singularPascalCase('create'),
        [UPDATE]: singularPascalCase('update'),
        [DELETE]: singularPascalCase('delete')
      }
    }
  });

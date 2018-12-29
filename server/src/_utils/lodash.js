import { camelCase, flow, upperFirst } from 'lodash/fp';

export const pascalCase = flow(
  camelCase,
  upperFirst
);

import { camelCase, flow, upperFirst } from 'lodash/fp';

export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const pascalCase = flow(
  camelCase,
  upperFirst
);

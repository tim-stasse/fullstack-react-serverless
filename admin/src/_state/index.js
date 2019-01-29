import { flow, get, identity, mapValues, pickBy, values } from 'lodash/fp';
import * as modules from './modules';

const mapModules = key =>
  flow(
    mapValues(get(key)),
    pickBy(identity)
  )(modules);

export const actions = mapModules('actions');
export const sagas = flow(
  mapModules,
  values
)('saga');

import { flow, get, identity, mapValues, pickBy, values } from 'lodash/fp';
import { mapValuesWithKey } from '_utils';
import * as modules from './modules';

const mapModules = key =>
  flow(
    mapValues(get(key)),
    pickBy(identity)
  )(modules);

export const actions = mapModules('actions');

export const reducers = mapModules('reducer');

export const sagas = flow(
  mapModules,
  values
)('saga');

export const selectors = flow(
  mapModules,
  mapValuesWithKey((selectors, key) =>
    mapValues(selector => state =>
      flow(
        get(key),
        selector
      )(state)
    )(selectors)
  )
)('selectors');

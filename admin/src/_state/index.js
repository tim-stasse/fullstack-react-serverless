import { flow, get, identity, mapValues, pickBy } from 'lodash/fp';
import * as modules from './modules';

export const actions = flow(
  mapValues(get('actions')),
  pickBy(identity)
)(modules);

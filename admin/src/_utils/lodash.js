import { mapValues } from 'lodash/fp';

export var mapValuesWithKey = mapValues.convert({ cap: false });

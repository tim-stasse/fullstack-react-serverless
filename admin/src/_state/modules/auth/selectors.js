import { getOr } from 'lodash/fp';

export const selectors = {
  verifiedEmail: getOr(null)('verifiedContact.verified.email')
};

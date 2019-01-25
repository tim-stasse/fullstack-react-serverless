import { createActions } from 'redux-actions';

export const actions = createActions({
  COMPLETE_NEW_PASSWORD: newPassword => ({ newPassword })
});

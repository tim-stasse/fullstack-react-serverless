import { handleActions } from 'redux-actions';
import { actions, sagaActions } from './actions';

export const initialState = {
  forgotPasswordUsername: null,
  verifiedContact: null
};

export const reducer = handleActions(
  {
    [actions.forgotPassword]: (state, { payload: { username } }) => ({
      ...state,
      forgotPasswordUsername: username
    }),
    [sagaActions.resetPasswordSuccess]: state => ({
      ...state,
      forgotPasswordUsername: initialState.forgotPasswordUsername
    }),
    [sagaActions.verifiedContact]: (
      state,
      { payload: { verifiedContact } }
    ) => ({
      ...state,
      verifiedContact
    })
  },
  initialState
);

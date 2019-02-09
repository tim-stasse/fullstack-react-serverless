import { createActions } from 'redux-actions';

export const actions = createActions(
  {
    COMPLETE_NEW_PASSWORD: newPassword => ({ newPassword }),
    CHANGE_PASSWORD: (oldPassword, newPassword) => ({
      oldPassword,
      newPassword
    }),
    FORGOT_PASSWORD: username => ({ username }),
    RESET_PASSWORD: (verificationCode, password) => ({
      verificationCode,
      password
    }),
    VERIFIED_CONTACT: undefined,
    VERIFY_USER_ATTRIBUTE: attribute => ({ attribute }),
    VERIFY_USER_ATTRIBUTE_SUBMIT: (attribute, verificationCode) => ({
      attribute,
      verificationCode
    })
  },
  { prefix: 'AUTH' }
);

export const sagaActions = createActions(
  {
    RESET_PASSWORD_SUCCESS: undefined,
    VERIFIED_CONTACT: verifiedContact => ({ verifiedContact })
  },
  { prefix: 'AUTH/SAGAS' }
);

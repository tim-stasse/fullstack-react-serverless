import Auth from '@aws-amplify/auth';
import { noop } from 'lodash/fp';
import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_CHECK,
  FETCH_END
} from 'react-admin';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { call, put, race, take } from 'redux-saga/effects';
import { routes } from '_constants';
import { actions } from '_state';
import { branchFuncs } from '_utils';

export function* authProvider(authEvent, params) {
  switch (authEvent) {
    case AUTH_LOGIN: {
      const { username, password } = params;
      const user = yield call([Auth, Auth.signIn], username, password);

      if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
        yield put(push(routes.auth.newPassword));
        yield put({ type: FETCH_END });

        const { completeNewPassword, locationChange } = yield race({
          completeNewPassword: take(
            ({ type }) => type === actions.auth.completeNewPassword.toString()
          ),
          locationChange: take(
            ({ type, payload }) =>
              type === LOCATION_CHANGE &&
              payload.pathname !== routes.auth.newPassword
          )
        });

        if (locationChange) {
          throw new Error('A new password is required');
        }

        const {
          payload: { newPassword }
        } = completeNewPassword;

        return yield call([Auth, Auth.completeNewPassword], user, newPassword);
      }

      return user;
    }
    case AUTH_LOGOUT: {
      return yield call([Auth, Auth.signOut]);
    }
    case AUTH_ERROR: {
      return yield call(
        branchFuncs,
        ({ status }) => status === 401 || status === 403,
        Auth.signOut.bind(Auth),
        noop
      );
    }
    case AUTH_CHECK: {
      const user = yield call([Auth, Auth.currentAuthenticatedUser]);

      yield put(actions.auth.verifiedContact());

      return user;
    }
    default: {
      throw new Error('Unknown auth event');
    }
  }
}

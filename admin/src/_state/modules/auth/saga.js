import Auth from '@aws-amplify/auth';
import { showNotification } from 'react-admin';
import { destroy } from 'redux-form';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actions } from './actions';

export function* changePassword({ payload: { oldPassword, newPassword } }) {
  try {
    const user = yield call([Auth, Auth.currentAuthenticatedUser]);

    const data = yield call(
      [Auth, Auth.changePassword],
      user,
      oldPassword,
      newPassword
    );
    yield put(destroy('changePassword'));
    yield put(showNotification(data));
  } catch (error) {
    const errorMessage =
      typeof error === 'string'
        ? error
        : typeof error === 'undefined' || !error.message
        ? 'custom.auth.changePasswordError'
        : error.message;

    yield put(showNotification(errorMessage, 'warning'));
  }
}

export function* saga() {
  yield all([takeLatest(actions.changePassword.toString(), changePassword)]);
}

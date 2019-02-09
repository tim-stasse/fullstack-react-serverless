import Auth from '@aws-amplify/auth';
import { startCase } from 'lodash/fp';
import { showNotification } from 'react-admin';
import { push } from 'react-router-redux';
import { destroy } from 'redux-form';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { forms, routes } from '_constants';
import { pascalCase } from '_utils';
import { actions, sagaActions } from './actions';

const getErrorMessage = defaultMessage => error =>
  typeof error === 'string'
    ? error
    : typeof error === 'undefined' || !error.message
    ? defaultMessage
    : error.message;

export function* changePassword({ payload: { oldPassword, newPassword } }) {
  try {
    const user = yield call([Auth, Auth.currentAuthenticatedUser]);

    const data = yield call(
      [Auth, Auth.changePassword],
      user,
      oldPassword,
      newPassword
    );
    yield put(destroy(forms.changePassword));
    yield put(showNotification(data));
  } catch (error) {
    yield put(
      showNotification(
        getErrorMessage('auth.changePasswordError')(error),
        'warning'
      )
    );
  }
}

export function* forgotPassword({ payload: { username } }) {
  try {
    const {
      CodeDeliveryDetails: { DeliveryMedium, Destination }
    } = yield call([Auth, Auth.forgotPassword], username);
    yield put(destroy(forms.forgotPassword));
    yield put(
      showNotification(`${startCase(DeliveryMedium)} sent to ${Destination}`)
    );
    yield put(push({ pathname: routes.auth.resetPassword }));
  } catch (error) {
    yield put(
      showNotification(
        getErrorMessage('auth.forgotPasswordError')(error),
        'warning'
      )
    );
  }
}

export function* resetPassword({ payload: { verificationCode, password } }) {
  try {
    const username = yield select(({ auth }) => auth.forgotPasswordUsername);

    yield call(
      [Auth, Auth.forgotPasswordSubmit],
      username,
      verificationCode,
      password
    );
    yield put(destroy(forms.resetPassword));
    yield put(showNotification('auth.resetPasswordSuccess'));
    yield put(sagaActions.resetPasswordSuccess());
    yield put(push(routes.auth.login));
  } catch (error) {
    yield put(
      showNotification(
        getErrorMessage('auth.resetPasswordError')(error),
        'warning'
      )
    );
  }
}

export function* verifiedContact() {
  const user = yield call([Auth, Auth.currentAuthenticatedUser]);
  const verifiedContact = yield call([Auth, Auth.verifiedContact], user);

  yield put(sagaActions.verifiedContact(verifiedContact));
}

export function* verifyUserAttribute({ payload: { attribute } }) {
  try {
    yield call([Auth, Auth.verifyCurrentUserAttribute], attribute);
    yield put(showNotification(`auth.verify${pascalCase(attribute)}Success`));
  } catch (error) {
    yield put(
      showNotification(
        getErrorMessage(`auth.verify${pascalCase(attribute)}Error`)(error),
        'warning'
      )
    );
  }
}

export function* verifyUserAttributeSubmit({
  payload: { attribute, verificationCode }
}) {
  try {
    yield call(
      [Auth, Auth.verifyCurrentUserAttributeSubmit],
      attribute,
      verificationCode
    );
    yield put(
      showNotification(`auth.verify${pascalCase(attribute)}SubmitSuccess`)
    );
  } catch (error) {
    yield put(
      showNotification(
        getErrorMessage(`auth.verify${pascalCase(attribute)}SubmitError`)(
          error
        ),
        'warning'
      )
    );
  }
}

export function* saga() {
  yield all([
    takeLatest(actions.changePassword.toString(), changePassword),
    takeLatest(actions.forgotPassword.toString(), forgotPassword),
    takeLatest(actions.resetPassword.toString(), resetPassword),
    takeLatest(actions.verifiedContact.toString(), verifiedContact),
    takeLatest(actions.verifyUserAttribute.toString(), verifyUserAttribute),
    takeLatest(
      actions.verifyUserAttributeSubmit.toString(),
      verifyUserAttributeSubmit
    )
  ]);
}

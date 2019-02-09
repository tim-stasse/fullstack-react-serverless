import englishMessages from 'ra-language-english';

const messages = {
  en: {
    ...englishMessages,
    auth: {
      changePassword: 'Change Password',
      changePasswordError: 'Failed to change password',
      forgotPassword: 'Forgot Password',
      newPassword: 'New Password',
      oldPassword: 'Old Password',
      resendCode: 'Resend Code',
      resetPassword: 'Reset Password',
      resetPasswordError: 'Unable to reset password',
      resetPasswordSuccess: 'Reset password success',
      verificationCode: 'Verification Code',
      verifyEmail: 'Verify Email',
      verifyEmailError: 'Failed to send email verification code',
      verifyEmailSubmitError: 'Unable to verify email',
      verifyEmailSubmitSuccess: 'Email successfully verified',
      verifyEmailSuccess: 'Email verification code sent'
    },
    form: {
      submit: 'Submit'
    }
  }
};

export const i18nProvider = locale => messages[locale];

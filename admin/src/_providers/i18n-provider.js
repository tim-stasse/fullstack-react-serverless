import englishMessages from 'ra-language-english';

const messages = {
  en: {
    ...englishMessages,
    auth: {
      changePassword: 'Change Password',
      changePasswordError: 'Failed to change password',
      newPassword: 'New Password',
      oldPassword: 'Old Password'
    }
  }
};

export const i18nProvider = locale => messages[locale];

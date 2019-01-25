import englishMessages from 'ra-language-english';

const messages = {
  en: {
    ...englishMessages,
    custom: {
      auth: {
        newPassword: 'New Password'
      }
    }
  }
};

export const i18nProvider = locale => messages[locale];

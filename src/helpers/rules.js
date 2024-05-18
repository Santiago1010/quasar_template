import i18n from '../configurations/i18n';
const { global } = i18n;

export default {
  required: (value) => !!value || global.t('errors.rules.required'),
  email: (value) => {
    return (
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
      global.t('errors.rules.email')
    );
  },
  password: (value) => value.length >= 6 || global.t('errors.rules.password'),
  integer: (value) => /^\d+$/.test(value) || global.t('errors.rules.integer'),
  float: (value, decimals = 2) => {
    const regex = new RegExp(`^\\d+\\.\\d{${decimals}}$`);
    return regex.test(value) || global.t('errors.rules.float', { decimals });
  },
  stringsOnly: (value) =>
    !/\d/.test(value) || global.t('errors.rules.stringsOnly'),
  min: (value, min) => value >= min || global.t('errors.rules.min', { min }),
  max: (value, max) => value <= max || global.t('errors.rules.max', { max }),
  minLength: (value, min) => {
    return (
      String(value).length >= min || global.t('errors.rules.minLength', { min })
    );
  },
  maxLength: (value, max) => {
    return (
      String(value).length <= max || global.t('errors.rules.maxLength', { max })
    );
  },
  isUrl: (value) => {
    return (
      /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value) ||
      global.t('errors.rules.isUrl')
    );
  },
};

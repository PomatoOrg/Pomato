import _ from 'lodash';
import defaultLocales from '../resources/locales';
import { DEVICE_LOCALE } from './Constants';

const Lang = {
  ...defaultLocales[DEVICE_LOCALE],
  get: (key, args = {}) => {
    let message = _.get(defaultLocales, `${DEVICE_LOCALE}.${key}`);
    if (!message) {
      message = _.get(defaultLocales, `en.${key}`);
    }
    if (!message) {
      message = `Missing ${DEVICE_LOCALE}.${key}`;
    }
    if (args) {
      const keys = Object.keys(args);
      keys.forEach((argKey) => {
        const argValue = _.get(args, argKey);
        message = message.replace(`__${argKey}__`, argValue);
      });
    }
    return message;
  },
};

export default Lang;

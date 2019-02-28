import DeviceInfo from 'react-native-device-info';

// 程序运行环境部分
export const DEVICE_MODEL = DeviceInfo.getModel();
export const DEVICE_NAME = DeviceInfo.getDeviceName();
export const DEVICE_LOCALE = DeviceInfo.getDeviceLocale() === 'en' ? 'en-US' : DeviceInfo.getDeviceLocale();
// export const DEVICE_LOCALE = 'zh-CN';
export const DEVICE_COUNTRY = 'CN';
export const DEVICE_TIMEZONE = 'Asia/Shanghai';

// 数据持久化部分
export const LOCAL_STORAGE_ACCESS_TOKEN = 'app__access_token';

export const SHORTEN_URL_TRATS_REGEX = new RegExp('^http(s)?://(stg.)?bin.do/');

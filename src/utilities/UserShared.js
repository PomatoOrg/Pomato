import { AsyncStorage } from 'react-native';

export const STORAGE_KEY_ACCESS_TOKEN = 'STORAGE_KEY_ACCESS_TOKEN';
export const STORAGE_KEY_ACCOUNT_INFO = 'STORAGE_KEY_ACCOUNT_INFO';

class UserShared {
  static ACCESS_TOKEN = undefined;

  static ACCOUNT_INFO = undefined;

  static async init() {
    const accessToken = await UserShared.getAccessToken();

    if (__DEV__) {
      let userSharedMessage = 'UserShared\n----------------------------------------\n';
      userSharedMessage += `AccessToken: ${accessToken}\n`;
      /* eslint-disable */
      console.log(userSharedMessage);
      /* eslint-enable */
    }

    await UserShared.setAccessToken(accessToken);
  }

  static async clear() {
    await AsyncStorage.clear();
  }

  static async getItem(key) {
    const value = await AsyncStorage.getItem(key);
    return value;
  }

  static async setItem(key, value) {
    let newValue = value;
    if (value === null) {
      newValue = '';
    }
    await AsyncStorage.setItem(key, newValue);
  }

  static async getIntItem(key) {
    const value = await AsyncStorage.getItem(key);
    return parseInt(value, 0);
  }

  static async putIntItem(key, value) {
    let newValue = value;
    if (value === null) {
      newValue = '';
    }
    await AsyncStorage.setItem(key, `${newValue}`);
  }

  static async getJsonItem(key) {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  static async putJsonItem(key, value) {
    if (value === null || value === undefined || value === '') {
      AsyncStorage.setItem(key, '');
      return;
    }
    const jsonString = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonString);
  }

  static async check() {
    const accessToken = UserShared.ACCESS_TOKEN;
    if (accessToken !== null) {
      return true;
    }
    return false;
  }

  static async getAccessToken() {
    const value = await UserShared.getItem(STORAGE_KEY_ACCESS_TOKEN);
    return value;
  }

  static async setAccessToken(value) {
    await UserShared.setItem(STORAGE_KEY_ACCESS_TOKEN, value);
    UserShared.ACCESS_TOKEN = value;
  }

  static async getAccountInfo() {
    const value = await UserShared.getJsonItem(STORAGE_KEY_ACCOUNT_INFO);
    return value;
  }

  static async setAccountInfo(value) {
    await UserShared.putJsonItem(STORAGE_KEY_ACCOUNT_INFO, value);
    UserShared.ACCESS_TOKEN = value;
  }
}

export default UserShared;

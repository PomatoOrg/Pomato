import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
class Utility {
  static SCREEN_WIDTH = width;

  static SCREEN_HEIGHT = height;

  static testPhoneNumber(phoneNum) {
    const reg = /^1[0-9]{10}$/;

    const flag = reg.test(phoneNum); // true
    return flag;
  }

  static testPassword(pwd) {
    const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{6,26}$/;
    const flag = reg.test(pwd);
    return flag;
  }
}
export default Utility;

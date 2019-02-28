import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home/Home';
import SettingMenu from '../screens/SettingMenu/SettingMenu';

const DrawerNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    SettingMenu: { screen: SettingMenu },
  },
  {
    drawerPosition: 'left',
    useNativeAnimations: true,
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(DrawerNavigator);
export default AppContainer;

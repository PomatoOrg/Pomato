import React, { Component } from 'react';
import { Alert } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import Lang from './utilities/Lang';
import AppContainer from './navigators/AppContainer';
import store from './redux/store/createStore';

// eslint-disable-next-line
alert = (text, onPress = () => {}) => {
  setTimeout(() => {
    Alert.alert(
      // eslint-disable-line
      text,
      undefined,
      [
        {
          text: Lang.get('components.dialog.ok'),
          onPress,
        },
      ],
    );
  }, 200);
};

class App extends Component {
  componentDidMount = () => {
    SplashScreen.hide();
  };

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;

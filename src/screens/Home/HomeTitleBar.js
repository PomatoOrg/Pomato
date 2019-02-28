import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Lang from '../../utilities/Lang';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

class HomeTitleBar extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text>123</Text>
        <Text>123</Text>
      </View>
    );
  }
}

export default HomeTitleBar;

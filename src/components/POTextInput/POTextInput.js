import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

class POTextInput extends Component {
  render() {
    const { style } = this.props;
    const fixStyle = { paddingHorizontal: 8, paddingVertical: 4 };
    const outStyle = StyleSheet.flatten(style);

    const newStyle = {
      ...fixStyle,
      ...outStyle,
    };
    return <TextInput {...this.props} underlineColorAndroid="transparent" style={newStyle} />;
  }
}

export default POTextInput;

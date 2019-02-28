import React from 'react';
import {
  Animated, StyleSheet, Text, View,
} from 'react-native';
import Utility from '../../utilities';

const { SCREEN_WIDTH } = Utility;

const styles = StyleSheet.create({
  itemContainer: {
    width: SCREEN_WIDTH,
    padding: 20,
  },
  itemAnimationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
  },
  text: {
    fontSize: 45,
    fontWeight: 'bold',
  },
});

const transitionAnimation = (index, xOffset) => ({
  transform: [
    { perspective: 800 },
    {
      scale: xOffset.interpolate({
        inputRange: [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
        outputRange: [0.25, 1, 0.25],
      }),
    },
    {
      rotateX: xOffset.interpolate({
        inputRange: [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
        outputRange: ['45deg', '0deg', '45deg'],
      }),
    },
    {
      rotateY: xOffset.interpolate({
        inputRange: [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
        outputRange: ['-45deg', '0deg', '45deg'],
      }),
    },
  ],
});

const HostItem = ({ index, text, xOffset }) => (
  <View style={styles.itemContainer}>
    <Animated.View style={[styles.itemAnimationContainer, transitionAnimation(index, xOffset)]}>
      <Text style={styles.text}>{text}</Text>
    </Animated.View>
  </View>
);

export default HostItem;

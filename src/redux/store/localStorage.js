import { AsyncStorage } from 'react-native';

const loadState = async () => {
  try {
    const serialzlizedState = await AsyncStorage.getItem('state');
    if (serialzlizedState === null) {
      return undefined;
    }
    const localState = JSON.parse(serialzlizedState);

    return localState;
  } catch (err) {
    return undefined;
  }
};
const saveState = async (state) => {
  const serialzlizedState = JSON.stringify(state);
  await AsyncStorage.setItem('state', serialzlizedState);
};

export { saveState, loadState };

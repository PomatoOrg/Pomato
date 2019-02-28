// Actions
// import makeActionCreator from '../util/makeActionCreator';

const defaultState = [
  { key: 'a111111' },
  { key: 'b111111' },
  { key: 'c111111' },
  { key: 'd111111' },
  { key: 'e111111' },
  { key: 'f111111' },
  { key: 'g111111' },
  { key: 'h111111' },
  { key: 'i111111' },
  { key: 'j111111' },
];
// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case 'TYPE_TEST_STRING':
      return state;
    // do reducer stuff
    default:
      return state;
  }
}

// export const testAction = makeActionCreator(TYPE_TEST_STRING, { test: 'testData' });

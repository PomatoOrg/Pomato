import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import subscribeListener from './subscribeListener';
import reducers from '../ducks/index';
import defaultState from './defaultState';

const rootReducer = combineReducers(reducers);

// 设定logger以配合Immutable
const logger = createLogger({
  level: 'info',
  collapsed: true,
  stateTransformer: (v) => {
    if (!v) {
      return {};
    }
    if (v.toJSON) {
      return v.toJSON();
    }
    return v;
  },
  errorTransformer: (v) => {
    if (!v) {
      return {};
    }
    if (v.toJSON) {
      return v.toJSON();
    }
    return v;
  },
  diff: true,
});

const middlewares = [thunk, logger];

if (__DEV__) {
  // debug模式
  console.log(__DEV__, '当前是 debug');
  middlewares.push(logger);
}

const store = createStore(rootReducer, defaultState, applyMiddleware(...middlewares));

store.subscribe(subscribeListener);

export default store;

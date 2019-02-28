// Actions
import { TYPE_CHANGE_CURRENT_HOST_BY_INDEX } from '../util/ACTION_TYPE';
import makeActionCreator from '../util/makeActionCreator';

const defaultState = {};
// Reducer
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case TYPE_CHANGE_CURRENT_HOST_BY_INDEX: {
      const { currentHost } = action;

      return { ...currentHost };
    }

    // do reducer stuff
    default:
      return state;
  }
}

export const changeCurrentHostByIndex = index => (dispatch, getState) => {
  const globalState = getState();

  const currentHost = globalState.hostList[index];

  const changeByIndexCreator = makeActionCreator(TYPE_CHANGE_CURRENT_HOST_BY_INDEX, 'currentHost');
  dispatch(changeByIndexCreator(currentHost));
};

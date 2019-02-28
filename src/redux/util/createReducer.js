const createReducer = (initialState, handlers) => (state = initialState, action) => {
  // hasOwnProperty 属性可继承重写,所以调用原型
  const isHasProperty = Object.prototype.hasOwnProperty.call(handlers, action.type);
  if (isHasProperty) {
    return handlers[action.type](state, action);
  }
  return state;
};

export default createReducer;

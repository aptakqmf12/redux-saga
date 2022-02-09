const INITIAL_STATE = {
  count: 0,
};

export const COUNT_UP_ASYNC = "COUNT_UP_ASYNC";
export const COUNT_UP = "COUNT_UP";
export const COUNT_DOWN = "COUNT_DOWN";

export const countUp = () => {
  return {
    type: COUNT_UP,
  };
};
export const countDown = () => {
  return {
    type: COUNT_DOWN,
  };
};

export function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNT_UP:
      return {
        ...state,
        count: state.count + 1,
      };
    case COUNT_DOWN:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

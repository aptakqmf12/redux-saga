const INITIAL_STATE = {
  loading: true,
  isAuth: false,
  fetchData: [],
};

export const FETCH = "FETCH";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const LOADING_TOGGLE = "LOADING_TOGGLE";

export const fetchAction = () => {
  return {
    type: FETCH,
  };
};
export const fetchSuccessAction = () => {
  return {
    type: FETCH_SUCCESS,
  };
};
export const fetchFailAction = () => {
  return {
    type: FETCH_FAIL,
  };
};

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH:
      return {
        ...state,
        fetchData: action.payload,
        isAuth: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchData: action.payload,
        isAuth: true,
      };
    case FETCH_FAIL:
      return {
        ...state,
        user: action.payload,
        isAuth: false,
      };
    case LOADING_TOGGLE:
      return {
        ...state,
        loading: !state.loading,
      };
    default:
      return state;
  }
}

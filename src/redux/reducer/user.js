const INITIAL_STATE = {
  user: null,
  isAuth: false,
  loginData: [],
};

export const LOG_IN = "LOG_IN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const loginAction = () => {
  return {
    type: LOG_IN,
  };
};
export const loginSuccessAction = () => {
  return {
    type: LOGIN_SUCCESS,
  };
};
export const loginFailAction = () => {
  return {
    type: LOGIN_FAIL,
  };
};

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        user: action.payload,
        isAuth: false,
      };
    default:
      return state;
  }
}

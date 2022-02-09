import { all, call, put, takeLatest, fork } from "redux-saga/effects";
import { LOG_IN, LOGIN_SUCCESS, LOGIN_FAIL } from "../reducer/user";

function loginAPI() {}

function* login() {
  try {
    yield call(loginAPI);
    yield put({
      type: LOGIN_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAIL,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOG_IN, login);
}

export default function* user() {
  yield all([fork(watchLogin)]);
}

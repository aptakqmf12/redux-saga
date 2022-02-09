import { all, call, put, takeLatest } from "redux-saga/effects";
import user from "./user";
import counterSaga from "./counter";

export default function* rootSaga() {
  yield all([counterSaga(), user()]);
}

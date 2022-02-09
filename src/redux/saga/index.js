import { all } from "redux-saga/effects";
import userSaga from "./user";
import counterSaga from "./counter";

export default function* rootSaga() {
  yield all([counterSaga(), userSaga()]);
}

import axios from "axios";
import { all, call, put, fork, takeLatest } from "redux-saga/effects";
import {
  FETCH,
  FETCH_SUCCESS,
  FETCH_FAIL,
  LOADING_TOGGLE,
} from "../reducer/user";

const delay = (ms) => new Promise((res) => setTimeout(res, ms)); //delay 줄때 Promise로 반환해야하나봄?

const fetchAPI = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/photos");
  return res.data;
};

function* fetch() {
  try {
    yield put({ type: LOADING_TOGGLE }); //put == dispatch
    yield delay(1000);
    const result = yield call(fetchAPI); //데이터를 동기로 받아서 저장하고 (call은 동기작업)
    yield put({ type: FETCH_SUCCESS, payload: result });
    yield put({ type: LOADING_TOGGLE });
  } catch (err) {
    console.error(err);
    yield put({ type: FETCH_FAIL });
  }
}

function* watchFetch() {
  yield takeLatest(FETCH, fetch); //FETCH라는 액션이 시작되면 fetch실행
}

export default function* userSaga() {
  yield all([fork(watchFetch)]); // saga 합치기
}

import { all, put, takeEvery, takeLatest } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* countDoubleUp() {
  yield delay(1000);
  yield put({ type: "COUNT_UP" });
  yield delay(1000);
  yield put({ type: "COUNT_UP" });
}

// COUNT_UP_ASYNC액션을 받으면 countDoubleUp를 takeEvery방식으로 실행
function* watchCountDoubleUp() {
  yield takeEvery("COUNT_UP_ASYNC", countDoubleUp);
}

// 위의 watch사가들을 종합적으로 묶어서 export
export default function* counterSaga() {
  yield all([watchCountDoubleUp()]);
}

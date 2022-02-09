import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { COUNT_UP, COUNT_DOWN, COUNT_UP_ASYNC } from "./redux/reducer/counter";
import { FETCH, FETCH_SUCCESS } from "./redux/reducer/user";

function App() {
  const counter = useSelector((state) => state.counterReducer);
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const onAddCountAsync = () => {
    dispatch({ type: COUNT_UP_ASYNC });
  };
  const onAddCount = () => {
    dispatch({ type: COUNT_UP });
  };
  const onDownCount = () => {
    dispatch({ type: COUNT_DOWN });
  };
  const onFetch = () => {
    dispatch({ type: FETCH });
  };
  return (
    <>
      <div>counter.count : {counter.count}</div>
      <div>user.isAuth : {String(user.isAuth)}</div>
      <button onClick={onAddCountAsync}>count async up</button>
      <button onClick={onAddCount}>count up</button>
      <button onClick={onDownCount}>count down</button>
      <button onClick={onFetch}>데이터받기</button>
      {!user.loading && <div>Loading...</div>}
      <ul>
        {user.fetchData?.map((data) => {
          return <li>{data?.title}</li>;
        })}
      </ul>
    </>
  );
}

export default App;

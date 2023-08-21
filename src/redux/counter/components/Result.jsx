/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useSelector } from 'react-redux';

const Result = () => {
    const count = useSelector(state => state.counter.count);
    // counter: ten cua reducer da duoc minh thay doi trong file root reducer
    // state.counter : state nam trong counter reducer
    return (
        <h1> {count} </h1>
    )
}
export default React.memo(Result);
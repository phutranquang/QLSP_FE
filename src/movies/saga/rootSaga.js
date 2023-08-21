import { watchHomeSaga } from "./homeSaga";
import { watchSearchSaga } from "./searchSaga"
import { call, all } from "redux-saga/effects";

export default function* rootSaga(){
    yield all([
        call(watchHomeSaga),
        call(watchSearchSaga),
        // call cac saga khac o day
    ]);
}
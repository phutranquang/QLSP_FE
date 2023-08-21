import { call, put, debounce } from 'redux-saga/effects';
// noi nay se la noi xu ly cac side-effect
import { api } from "../services/api";
import { helpers } from "../helpers/index";
import * as actions from "../actions/search";

// saga : worker + watcher
// 1 - worker
// redux saga: phai trien khai bang generator function
function* searchSaga({ keyword }){
    try {
        // bao hieu bat dau call api
        // saga se dispatch action vao reducer trong store
        yield put(actions.startSearchMovie(true));
        //yield delay(1000);
        const dataMovie = yield call(api.searchMoviesByKeyword, keyword, 1);
        //console.log(dataMovie);
        if(!helpers.isEmptyObject(dataMovie)){
            // co du lieu
            yield put(actions.searchMovieSuccess(dataMovie));
        } else {
            // khong co du lieu
            yield put(actions.searchMovieFail({
                cod: 404,
                mess: "Not found data"
            }));
        }
    } catch (error) {
        console.log(error);
        yield put(actions.searchMovieFail({
            cod: 500,
            mess: error
        }));
    } finally {
        // stop action
        yield put(actions.startSearchMovie(false));
    }
}
// 2 - watcher
export function* watchSearchSaga(){
    yield debounce(1000,actions.SEARCH_BY_KEYWORD, searchSaga);
}
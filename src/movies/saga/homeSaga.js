import { call, put, takeEvery } from 'redux-saga/effects';
// noi nay se la noi xu ly cac side-effect
import { api } from "../services/api";
import { helpers } from "../helpers/index";
import * as actions from "../actions/home";

// saga : worker + watcher
// 1 - worker
// redux saga: phai trien khai bang generator function
function* homeSaga({ page }){
    console.log(`page : ${page}`);
    try {
        // bao hieu bat dau call api
        // saga se dispatch action vao reducer trong store
        yield put(actions.loadingRequestDataHome(true));
        const dataMovie = yield call(api.getDataPopularMovies, page);
        if(!helpers.isEmptyObject(dataMovie)){
            // co du lieu
            yield put(actions.requestDataHomeSuccess(dataMovie));
        } else {
            // khong co du lieu
            yield put(actions.requestDataHomeFailure({
                cod: 404,
                mess: "Not found data"
            }));
        }
    } catch (error) {
        console.log(error);
        yield put(actions.requestDataHomeFailure({
            cod: 500,
            mess: error
        }));
    } finally {
        // stop action
        yield put(actions.loadingRequestDataHome(false));
    }
}
// 2 - watcher
export function* watchHomeSaga(){
    yield takeEvery(actions.REQUEST_DATA_HOME, homeSaga);
}
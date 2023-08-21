// reducer se nhan tham so la state va action
// action thi chinh la action cua redux saga
import {
    LOADING_REQUEST_DATA,
    REQUEST_DATA_HOME_SUCCESS,
    REQUEST_DATA_HOME_FAILURE,
} from "../actions/home";

// khai bao state
const initDefaultState = {
    loading: false,
    dataMovies: [],
    errors: null,
    page: 1,
    totalPage: 0,
    totalResult: 0,
}

export const homeReducer = (state = initDefaultState, action) => {
    switch(action.type) {
        case LOADING_REQUEST_DATA:
            return {
                ...state,
                loading: action.loading
            }
        case REQUEST_DATA_HOME_SUCCESS:
            return {
                ...state,
                ...{
                    dataMovies: action.dataMovie.results,
                    errors: null,
                    page: action.dataMovie.page,
                    totalPage: action.dataMovie.total_pages,
                    totalResult: action.dataMovie.total_results
                }
            }
        case REQUEST_DATA_HOME_FAILURE:
            return {
                ...state,
                errors: action.error
            }
        default:
            return state
    }
}
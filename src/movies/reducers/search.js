// reducer se nhan tham so la state va action
// action thi chinh la action cua redux saga
import * as types from "../actions/search";

// khai bao state
const initDefaultState = {
    loading: false,
    dataMovies: [],
    errors: null,
    page: 1,
    totalPage: 0,
    totalResult: 0,
}

export const searchReducer = (state = initDefaultState, action) => {
    switch(action.type) {
        case types.START_SEARCH_MOVIE:
            return {
                ...state,
                loading: action.loading
            }
        case types.SEARCH_MOVIE_SUCCESS:
            return {
                ...state,
                ...{
                    dataMovies: action.movies.results,
                    errors: null,
                    page: action.movies.page,
                    totalPage: action.movies.total_pages,
                    totalResult: action.movies.total_results
                }
            }
        case types.SEARCH_MOVIE_FAIL:
            return {
                ...state,
                errors: action.error
            }
        default:
            return state
    }
}
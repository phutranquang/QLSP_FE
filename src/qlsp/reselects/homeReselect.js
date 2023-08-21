// noi day se la noi ho tro viec lay du lieu trong store
// khi cac action dc dispatch vao trong store ma khong co su thay doi sau moi lan dispacth thi reselect no se tra ket qua ve cho action luon ma khong bat reducer phai cap nhat lai state
import { createSelector } from 'reselect';

// lay ra state trong reducer
const homeState = state => state.home;

export const getDataHomePage = createSelector(
    homeState,
    state => {
        // state : chinh la du lieu ma homeState dang co
        // state.dataMovies : mang chua 20 bo phim
       const data = state.dataMovies.map(item => ({
            id: item.id,
            title: item.title,
            original_title: item.original_title,
            poster_path: item.poster_path
       }))
       return data;
    }
)
// lay luon state ra
export const getLoadingDataHome = createSelector(
    homeState,
    state => state.loading
)
export const getDataTotalPage = createSelector(
    homeState,
    page => page.totalPage
)
export const getDataTotalResult = createSelector(
    homeState,
    record => record.totalResult
)
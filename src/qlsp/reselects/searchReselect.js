// noi day se la noi ho tro viec lay du lieu trong store
// khi cac action dc dispatch vao trong store ma khong co su thay doi sau moi lan dispacth thi reselect no se tra ket qua ve cho action luon ma khong bat reducer phai cap nhat lai state
import { createSelector } from 'reselect';

// lay ra state trong reducer
const searchState = state => state.search;

export const getDataSearch = createSelector(
    searchState,
    state => {
        // state : chinh la du lieu ma homeState dang co
        // state.dataMovies : mang chua 20 bo phim
       const data = state.products.map(item => ({
            id: item.id,
            name: item.name,
            image: item.image
       }))
       return data;
    }
)
// lay luon state ra
export const getLoadingSearch = createSelector(
    searchState,
    state => state.loading
)
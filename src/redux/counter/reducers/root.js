import { combineReducers } from 'redux';
import { counterReducer } from "./counter";

const rootReducer = combineReducers({
    counter: counterReducer,
    // sau nay chinh la ten moi cua reducer de lay state ra
});
export default rootReducer;
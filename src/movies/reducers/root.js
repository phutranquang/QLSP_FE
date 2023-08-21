import { combineReducers } from 'redux';
import { homeReducer } from "./home";
import { searchReducer } from './search';

const rootReducer = combineReducers({
    home: homeReducer,
    search: searchReducer,
});
export default rootReducer;

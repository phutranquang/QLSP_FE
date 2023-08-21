import { createStore } from "redux";
import rootReducer from "./reducers/root";

// chua toan bo trang thai cua ung dung
const store = createStore(rootReducer);
export default store;
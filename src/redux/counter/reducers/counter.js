// noi day dinh nghia logic cap nhat state cua ung dung
// reducer se tiep cac action duoc store goi vao
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "../actions/counter";

// khai bao state
const defaultState = {
    count : 0,
    show: true
}
export const counterReducer = (state = defaultState, action) => {
    // action: action dc store no goi vao va chuyen cho reducer xu ly
    // state : state cu
    // ban chat : reducer se cap nhat state(tao ra state moi - khong lam thay doi state cu ban dau)
    // reducer return ve la 1 object
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,
                // toi chi cap nhap thay doi lai cai state count
                ...{ count: state.count + action.payload.val }
                // action.payload.val : tham so truyen len
            }
        case DECREMENT_COUNTER:
            return {
                ...state,
                ...{ count: state.count - action.payload.val }
            }
        default:
            return state;
    }
}
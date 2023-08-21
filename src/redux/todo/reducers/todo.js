/* eslint-disable no-case-declarations */
import {
    ADD_TODO,
    CHANGE_NAME_TODO,
    REMOVE_ITEM_TODO,
    FINISH_ITEM_TODO,
} from "../actions/todo"

const initState = {
    name: '',
    listData: [],
    idTodo: 1
}

export const todoReducer = (state = initState, action) => {
    switch(action.type){
        case CHANGE_NAME_TODO:
            return {
                ...state,
                name: action.keyword
            }
        case ADD_TODO:
            return {
                ...state,
                ...{
                    idTodo: state.idTodo + 1,
                    listData: [...state.listData, {
                        nameTodo: action.nameTodo,
                        id: state.idTodo,
                        done: false
                    }],
                    name: ''
                }
            }
        case REMOVE_ITEM_TODO:
            const idItemTodo = action.id;
            const newData    = state.listData.filter(item => item.id !== idItemTodo);
            return {
                ...state,
                listData: newData
            }
        case FINISH_ITEM_TODO:
            const idItem = action.id;
            const data = state.listData.map(item => {
                return item.id === idItem ? {...item, done: !item.done} : item;
            });
            return {
                ...state,
                listData: data
            }
        default:
            return state;
    }
}
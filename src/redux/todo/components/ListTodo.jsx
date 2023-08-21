/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    removeItemTodoById,
    finishItemTodoById,
} from "../actions/todo";

const ListTodo = () => {
    const data = useSelector(state => state.todo.listData);
    const dispatch = useDispatch();

    const removeItem = id => {
        dispatch(removeItemTodoById(id));
    }

    const finishItem = id => {
        dispatch(finishItemTodoById(id))
    }
    
    return (
        <ul>
            {data.map((item, index) => (
                <li key={index}>
                    <input
                        type="checkbox"
                        onChange={() => finishItem(item.id)}
                        checked={item.done}
                    />
                    <span
                        style={item.done ? { color: 'red' } : null}
                    > {item.nameTodo} </span> 
                    <button onClick={() => removeItem(item.id)}> Delete </button>
                </li>
            ))}
        </ul>
    )
}
export default React.memo(ListTodo);
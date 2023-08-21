/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNameTodo } from "../actions/todo";

const InputTodo = (props) => {
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.name);

    const changeName = (name) => {
        dispatch(changeNameTodo(name));
    }

    return (
        <input
            name={props.name}
            type={props.type}
            onChange={e => changeName(e.target.value)}
            value={todo}
        />
    )
}
export default React.memo(InputTodo);
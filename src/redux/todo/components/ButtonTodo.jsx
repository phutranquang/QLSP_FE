/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodoByName } from "../actions/todo";

const ButtonTodo = (props) => {
    let todo = useSelector(state => state.todo.name);
    const dispatch = useDispatch();

    const addTodo = () => {
        todo = todo.trim();
        if(todo.length > 0){
            dispatch(addTodoByName(todo))
        }
    }

    return (
        <button
            name="button"
            onClick={() => addTodo()}
        > {props.children} </button>
    )
}
export default React.memo(ButtonTodo);
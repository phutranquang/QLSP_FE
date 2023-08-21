/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions/counter";
import { Button } from 'antd';

const ButtonCounter = (props) => {
    const dispatch = useDispatch(); // tao bien
    const { name } = props; // lay ra ten cua Button nguoi dung bam

    const changeCounter = () => {
        if(name === 'increment'){
            // day action incrementCounter vao store
            dispatch(incrementCounter(1));
        } else if(name === 'decrement'){
            // day action decrementCounter vao store
            dispatch(decrementCounter(1));
        }
    }

    return (
        <Button
            type="primary"
            name={props.name}
            onClick={() => changeCounter()}
        > {props.children} </Button>
    )
}
export default React.memo(ButtonCounter);
import React from "react";
import { Button } from 'antd';
import { useDispatch } from "react-redux";
import { incrementCounter, decrementCounter } from "../actions/counter";

const ButtonCounter = (props) => {
    const { name } = props;
    const dispatch = useDispatch();

    const changerCounter = () => {
        if ( name === 'increment') {
            // day action incramentCounter vao store
            dispatch(incrementCounter(1))
        } else if (name == 'decrement') {
            // day action decrementCounter vao store
            dispatch(decrementCounter(1))
        }
    }

    return (
        <Button
            type="primary"
            name={props.name}
            onClick={()=>changerCounter()}
        >{props.children}
        </Button>
    )
}

export default React.memo(ButtonCounter)
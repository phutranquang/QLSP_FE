/* eslint-disable react-refresh/only-export-components */
import { memo } from "react"

export default memo(function ResultCounter(props){
    console.log('Result component da dc render')
    return (
        <>
            <h1>{props.result}</h1>
        </>
    )
})
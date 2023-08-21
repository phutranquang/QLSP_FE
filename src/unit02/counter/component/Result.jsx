import React from "react";

export default React.memo(function ResultCounter(props) {
    
    return (
        <>
            <h1>{props.result}</h1>
        </>
    )
})
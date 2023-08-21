/* eslint-disable react-refresh/only-export-components */
import React from "react"

// eslint-disable-next-line react-refresh/only-export-components
const HeaderComponent = () => {
    console.log('Header component da dc render')
    return (
        <>
            <header>
                <h1> App counter </h1>
            </header>
        </>
    )
}
export default React.memo(HeaderComponent);
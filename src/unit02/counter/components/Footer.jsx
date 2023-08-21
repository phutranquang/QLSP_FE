import React from "react"

// eslint-disable-next-line react-refresh/only-export-components
export default React.memo(function  FooterComponent(){
    console.log('Footer component da dc render')
    return (
        <>
            <footer>
                <p> This is footer </p>
            </footer>
        </>
    )
})
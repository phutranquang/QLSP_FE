export default function Buttoncounter(props) {

    return (
        <>
            <button 
                type={props.type}
                name={props.name}
                onClick={(event) => props.click(event)}
            >{props.children}</button>
        </>
    )
}
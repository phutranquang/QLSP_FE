 
 export function InputComponent (props) {
    const { type, name } = props

    return (
        <input 
            type={type} 
            name={name}
            onChange={props.change}
        />
    )
 }
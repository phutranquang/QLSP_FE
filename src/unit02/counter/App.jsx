import { useState } from 'react'
import ResultCounter from './components/Result'
import ButtonCounter from './components/ButtonCounter'
import HeaderComponent from './components/Header'
import FooterComponent from './components/Footer'


export default function AppCounter(){
    // useState: khai bao - xu ly ve state trong function component
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    // count: name state
    // setCount la 1 function de cap nhat - thay doi state
    // 0 trong useState() : gia tri mac dinh cua state (nghia la luc nay state count co gia tri la 0)

    const changeCounter = (event) => {
        // lay ra ten cua button ma nguoi dung click
        const nameButton = event.target.name;
        if(nameButton === 'increment'){
            // thay doi state count (tang len 1 don vi)
            setCount(count + number);
        } else if(nameButton === 'decrement'){
            // thay doi state count (giam xuong 1 don vi)
            setCount(count - number);
        }
    }

    const changeInputNumber = (event) => {
        let value = event.target.value.trim();
        if(!isNaN(value) && value.length > 0){
            value = parseInt(value);
            // luu so nguoi dung nhap o input vao state da khai bao (cap nhat thay doi state number)
            setNumber(value);
        }
    }
    console.log('AppCounter da dc render')
    return (
        <>
            <div className='container'>
                <HeaderComponent/>
                <ResultCounter result={count} />
                <ButtonCounter
                    type="button"
                    name="increment"
                    click={changeCounter}
                > + </ButtonCounter>
                <ButtonCounter
                    type="button"
                    name="decrement"
                    click={changeCounter}
                > - </ButtonCounter>
                <br/>
                <input
                    type='text'
                    defaultValue={number}
                    onChange={changeInputNumber}
                />
                <FooterComponent/>
            </div>
        </>
    )
}
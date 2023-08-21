import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import ContentComponent from "./components/Content";
import ImageComponent from "./components/images/img";
//Trogng asset no da render san -> Logo1 laf ten Component minh tu dat
import Logo1 from '../assets/icon-1.png';
import Logo2 from '../assets/icon-2.png';
import Logo3 from '../assets/icon-3.png';
import { InputComponent } from "./components/input/input";

export default function App() {

    function clickMe() {
        alert('Hi !!!!!1')
    }

    const myChange = event => {
        console.log(event.target.value)
    }

    return (
        <>
            <HeaderComponent/>
            <ContentComponent>
                <h4>Content</h4>

                <InputComponent type="text" name="user"
                                change={myChange}
                />

                <InputComponent type="password" name="pass"
                />
                
                <br/>

                <button
                    onClick={clickMe}
                > Click me</button>
        
            </ContentComponent>
            <FooterComponent/>
        </>
    )
}
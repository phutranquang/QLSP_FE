import { useState } from "react";
import ChangeUIContext from "./context";


const ProviderContext = ({ children }) => {
    // dinh nghia cac state va cac capnhat state de share global
    const [bgColor, setBgColor] = useState('light');
    const [color, setColor] = useState('black');

    //viet su kien nguoi dung bam switch chuyen che do
    const onChange = (checked) => {
        if (checked) {
            setBgColor('light');
            setColor('black');
        } else {
            setBgColor('dark');
            setColor('white');
        }
      };
    return (
        <>
            <ChangeUIContext.Provider value={{bgColor, color, onChange}}>
                { children }
            </ChangeUIContext.Provider>
            
        </>
    )
}
export default ProviderContext
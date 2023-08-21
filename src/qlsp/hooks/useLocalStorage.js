// viet hooks luu thong tin cua nguoi dung
// vao local storage
import { useState } from "react";

export const useLocalStorage = (keyName, defaultValue) => {
    // muon luu tru du lieu vao local storage tren trinh duyet.
    // khai bao key va du lieu luu tru la gi ?
    const [storeValue, setStoreValue] = useState(() => {
        try {
            // xu ly
            // 1 - lay gia tri tu local storage o trinh duyet (neu co)
            const value = window.localStorage.getItem(keyName);
            if(value){
                // co gia tri
                // tra du lieu ve cho state storeValue
                // khi luu du lieu vao local storage thi trinh duyet chi chap nhan dinh dang la string (chuoi)
                // chuyen tu chuoi json ve object JS
                return JSON.parse(value);
            } else {
                // ko co gia tri
                // luu data vao local storage
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        } catch (error) {
            // bat loi
            console.log(error);
            return defaultValue; // tra gia tri ve cho state storeValue
        }
    })
    // xu ly cho phan setStoreValue (function cap nhat lai state storeValue)
    const setValue = (newValue) => {
        try {
            // xu ly
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        } catch (error) {
            // bao loi
            console.log(error);
        }
        setStoreValue(newValue);
    }
    return [storeValue, setValue];
}
// const [value, setValue] = useLocalStorage("abc", null);
import { createContext } from 'react';

const ChangeUIContext = createContext({
    bgColor: 'white',
    color: 'black'
});

// du lieu mac dinh share
export default ChangeUIContext
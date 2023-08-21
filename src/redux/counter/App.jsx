import { Provider } from 'react-redux';
import CounterApp from "./pages/CounterApp";
import store from "./store"

//Provider cua react-redux cho phep cac component lay dc state nam trong store
export default function App(){
    return (
        <Provider store={store}>
            <CounterApp/>
        </Provider>
    )
}
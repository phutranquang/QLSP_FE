import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import router from "./routes/Web";
import { configStore } from "./configStore";

const store = configStore();

export default function Movies(){
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
        
    )
}
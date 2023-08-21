import axios from "axios";

export const loginUser = async ({username, password}) => {
    const urlApi = `https://dummyjson.com/auth/login`;
    const response = await axios({
        method: 'post',
        url: urlApi,
        data: {
            username,
            password
        },
        headers: { 'Content-Type': 'application/json'}
    });
    return await response.status === 200 
                ? await response.data 
                : {};
}
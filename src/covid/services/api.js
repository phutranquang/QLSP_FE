import axios from 'axios';

const getDataVirusCorona = async () => {
    const url = `https://api.covid19api.com/summary`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};
}
export const api = {
    getDataVirusCorona
}
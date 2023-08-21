import axios from 'axios';


const getDataProducts = async () => {
    const url = `http://localhost:8080/products`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};
}

const getDataPhones = async () => {
    const url = `http://localhost:8080/products/smartphones`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};
}

const getDataLaptops = async () => {
    const url = `http://localhost:8080/products/laptops`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};
}

const getDataCustomers = async () => {
    const url = `http://localhost:8080/customers`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};
}

const getDataBills = async () => {
    const url = `http://localhost:8080/bills`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};
}

const getDataProductById = async (id) => {
    const url = `http://localhost:8080/products/${id}`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};

}

const getDataByName = async (nameSearch) => {
    const url = `http://localhost:8080/search?query=${nameSearch}`;
    const response = await axios.get(url);
    return await response.status === 200 ? await response.data : {};

}

const updateProductById = async (id, product) => {
    const url = `http://localhost:8080/products/${id}`;
    const response = await axios.put(url,product);
    return await response.status === 200 ? await response.data : {};
}

const deleteProductById = async (id) => {
    const url = `http://localhost:8080/products/${id}`;
    const response = await axios.delete(url);
    return await response.status === 200 
}

const saveProduct = async (product) => {
    const url = `http://localhost:8080/products`;
    const response = await axios.post(url, product);
    return await response.status === 200 ? await response.data : {};
}

export const api = {

    getDataProducts,
    getDataPhones,
    getDataLaptops,
    getDataCustomers,
    getDataBills,
    getDataProductById,
    getDataByName,
    updateProductById,
    deleteProductById,
    saveProduct
}
/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState, Skeleton } from "react";
import LayoutCommerce from "../components/LayoutCommerce";
import { useParams } from "react-router-dom";
import ListProducts from "../components/ListProducts";
import { api } from "../services/api";
import { helpers } from "../helpers";

// eslint-disable-next-line react-refresh/only-export-components
const SearchProduct = () => {

    const { name } = useParams();
    const [productSearch, setDataProductSearch] = useState([]);
    const [error, setError] = useState(null);

    const getData = async () => {
        const dataProducts = await api.getDataByName(name);
        if(helpers.isEmptyObject(dataProducts) ){
            // ko co du lieu
            setError({
                cod: 404,
                mess: "Not found data"
            });
        } else {
            // co du lieu
            setDataProductSearch(dataProducts);
            setError(null);
        }
    }

    useEffect(() => {
        getData();
    },[name]);


    return (
        <LayoutCommerce
            level1="Trang chu"
            level2="Danh sach"
            level3={`Tìm kiếm sản phẩm : ${name}`}
        >
            <ListProducts
                products={productSearch}
            />
        </LayoutCommerce>
    )
}

export default React.memo(SearchProduct);
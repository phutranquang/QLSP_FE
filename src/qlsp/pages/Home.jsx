/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutProducts from "../components/Layout";
import { Row, Col, Skeleton, Carousel } from "antd";
import { api } from "../services/api";
import { helpers } from "../helpers";
import TableProducts from "../components/TableProducts";
import CrudProduct from "../components/CrudProduct";


// eslint-disable-next-line react-refresh/only-export-components
const HomeProducts = () => {


    const [loading, setLoading] = useState(true);
    const [productsAll, setDataProducts] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        let checking = false;
        const getData = async () => {
            setLoading(true);
            const dataProducts = await api.getDataProducts();
            if(helpers.isEmptyObject(dataProducts)){
                // ko co du lieu
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu
                setDataProducts(dataProducts);
                setError(null);
            }
            setLoading(false); // hoan thanh
        }
        getData();
        // clean up
        return () => {
            checking = true;
        }
    },[]);

    if(loading){
        return (
            <LayoutProducts>
                <Skeleton active />
            </LayoutProducts>
        )
    }

    return (
        <LayoutProducts>
            <TableProducts products={productsAll}/>
            {/* <CrudProduct products={productsAll}/> */}
        </LayoutProducts>
    )
}

export default React.memo(HomeProducts);
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutCommerce from "../components/LayoutCommerce";
import { Row, Col, Skeleton, Carousel } from "antd";
import { api } from "../services/api";
import { helpers } from "../helpers";
import ListProducts from "../components/ListProducts";

import image1 from '../../assets/banner.jpg'

// eslint-disable-next-line react-refresh/only-export-components
const HomeCommerce = () => {


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
            <LayoutCommerce
                level1="Trang chu"
                level2="Danh sách"
                level3="Tất cả sản phẩm">
                <Skeleton active />
            </LayoutCommerce>
        )
    }

    return (
        <LayoutCommerce
            level1="Trang chu"
            level2="Danh sách"
            level3="Tất cả sản phẩm"
            >

            <Row justify={"center"} style={{ marginBottom: '50px'}}>
                <img src={image1}></img>
            </Row>
            <ListProducts
                products={productsAll}
            />
        </LayoutCommerce>
    )
}

export default React.memo(HomeCommerce);
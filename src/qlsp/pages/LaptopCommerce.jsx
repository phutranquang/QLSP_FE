/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutCommerce from "../components/LayoutCommerce";
import { Row, Col, Skeleton, Select  } from "antd";
import { api } from "../services/api";
import { helpers } from "../helpers";
import ListProducts from "../components/ListProducts";


// eslint-disable-next-line react-refresh/only-export-components
const LaptopCommerce = () => {

    const [loading, setLoading] = useState(true);
    const [laptops, setDataLaptops] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        let checking = false;
        const getData = async () => {
            setLoading(true);
            const dataLaptops = await api.getDataLaptops();
            if(helpers.isEmptyObject(dataLaptops)){
                // ko co du lieu
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu
                setDataLaptops(dataLaptops);
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
                level1="Trang Chủ"
                level2="Danh sách"
                level3="Máy tính xách tay"
            >
                <Row>
                    <Col>
                        <Skeleton active />
                    </Col>
                </Row>
            </LayoutCommerce>
        )
    }

    return (
        <LayoutCommerce
            level1="Trang Chủ"
            level2="Danh sách"
            level3="Máy tính xách tay"
        >
            <div style={{ display: "flex", marginBottom: '30px'}}>
                <h3 style={{ marginTop: '5px'}}> Bộ lọc</h3>
                <Select 
                    showSearch
                    style={{
                        width: 200,
                        marginLeft: '10px',
                    }}
                    placeholder="Hãng sản xuất">
                </Select>
                <Select 
                    showSearch
                    style={{
                        width: 200,
                        marginLeft: '10px'
                    }}
                    placeholder="Giá">          
                </Select>
                <Select 
                    showSearch
                    style={{
                        width: 200,
                        marginLeft: '10px'
                    }}
                    placeholder="Hệ điều hành">          
                </Select>
            </div>
            <ListProducts
                products={laptops}
                />
        </LayoutCommerce>
    )
}

export default React.memo(LaptopCommerce);
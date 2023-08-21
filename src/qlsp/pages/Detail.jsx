/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutCommerce from "../components/LayoutCommerce";
import { Row, Col, Image, Skeleton, Button, Card } from "antd";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { api } from "../services/api";
import { helpers } from "../helpers";


const DetailProduct = () => {
    const { slug, id } = useParams(); // get params
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const dataProductById = await api.getDataProductById(id);
            if(helpers.isEmptyObject(dataProductById)){
                // ko co du lieu theo id
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu theo id
                setProduct(dataProductById);
                setError(null);
            }
            setLoading(false); // hoan thanh
        }
        getData();
    }, [id]);

    if(loading){
        return (
            <LayoutCommerce
                level1="Trang chủ"
                level2="Chi tiết"
                level3={slug}
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
            level1="Trang chủ"
            level2="Chi tiết"
            level3={slug}
        >
            <Row>
                <Col span={24}>
                    <h4>Chi tiết sản phẩm </h4>
                    <Row>
                        <Col span={10}>
                            <div style={{ paddingTop : '10px'}}>
                                <Image src={product.image} />
                            </div>
                            <p style={{ alignContent: "center", marginTop: 10}}>{product.description}</p>
                        </Col>
                        <Col span={8}>
                            <div style={{ paddingTop: '10px', marginLeft: '80px' }}>
                                <h2>{product.name}</h2>
                                <div style={{ display:'flex'}}>
                                    <p>Màu sắc    :</p>
                                    <p style={{ marginLeft: '5px'}}> {product.color} </p>
                                </div>
                                <div style={{ display:'flex'}}>
                                    <p>Màn hình   :</p>
                                    <p style={{ marginLeft: '5px' }}> {product.screen} </p>
                                </div>
                                <div style={{ display:'flex'}}>
                                    <p>Chipset    :</p>
                                    <p style={{ marginLeft: '5px'}}> {product.chip} </p>
                                </div>
                                <div style={{ display:'flex'}}>
                                    <p>RAM        :</p>
                                    <p style={{ marginLeft: '5px'}}> {product.ram} </p>
                                </div>
                                <div style={{ display:'flex'}}>
                                    <p>Bộ nhớ        :</p>
                                    <p style={{ marginLeft: '5px'}}> {product.memory} </p>
                                </div>
                                <div style={{ display:'flex'}}>
                                    <p>Hãng       :</p>
                                    <p style={{ marginLeft: '5px'}}> {product.brand} </p>
                                </div>
                            </div>
                            <Button
                                style={{ marginLeft: '80px', marginTop: '20px', width: 300}}
                                type="primary"
                                danger
                                >
                                    Mua ngay
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutCommerce>
    )
}

export default React.memo(DetailProduct);
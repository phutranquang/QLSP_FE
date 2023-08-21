/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Row, Col, Card, List, Button } from 'antd';
import { Link } from "react-router-dom";
import slugify from 'react-slugify';

const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

const ListProducts = ({ products }) => {
    console.log(products);
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify={"center"}>
            {products.map((item, index) => (
                <Col key={index}>
                    <Link to={`/product/${slugify(item.name)}/${item.id}`}>
                        <Card
                            hoverable
                            bordered={false}
                            style={{
                                width: 200,
                                minHeight: 350,
                                marginBottom: '70px'
                            }}
                            cover={<img src={item.image} />}
                        >
                            <h3>{item.name}</h3>
                            <h3>{VND.format(item.price)}</h3> 
                            <h4 style={{ color: "red"}}>- {item.discount} %</h4>           
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    )
}
export default React.memo(ListProducts);
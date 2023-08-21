/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { Row, Col, Input } from 'antd'
import { contextWeather } from "../Context";

const { Search } = Input;

const SearchWeather = () => {
    const { loading, getDataWeather } = useContext(contextWeather)
    return (
        <>
            <Row style={{ margin: '20px 0px' }}>
                <Col span={12} offset={6}>
                    <Search
                        placeholder="name's city"
                        allowClear
                        enterButton
                        loading={loading}
                        onSearch={city => getDataWeather(city)}
                    />
                </Col>
            </Row>
        </>
    )
}
export default React.memo(SearchWeather)
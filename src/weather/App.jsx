/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Row, Col } from "antd";
import SearchWeather from './components/Search'
import ListData from './components/ListData'
import WeatherProvider from "./Provider";

export default React.memo(function AppWeather() {
    return (
        <Row>
            <Col span={24}>
                <WeatherProvider>
                    <SearchWeather/>
                    <ListData/>
                </WeatherProvider>
            </Col>
        </Row>
    )
})
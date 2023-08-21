/* eslint-disable react-refresh/only-export-components */
import React from "react";
import ButtonCounter from "../components/ButtonCounter";
import Result from "../components/Result";
import { Row, Col } from "antd";

const CounterApp = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Result/>
                <ButtonCounter
                    name="increment"
                > + </ButtonCounter>
                <ButtonCounter
                    name="decrement"
                > - </ButtonCounter>
            </Col>
        </Row>
    )
}
export default React.memo(CounterApp);
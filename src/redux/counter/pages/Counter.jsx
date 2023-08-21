import React from "react";
import ButtonCounter from "../components/Button";
import { Row, Col } from "antd";
import Result from "../components/Result";

const AppCounter = () => {
    return (
        <Row>
            <Col span={12} offset={6}>
                <Result />
                <ButtonCounter name="increment">+</ButtonCounter>
                <ButtonCounter name="decrement">-</ButtonCounter>
            </Col>
        </Row>
    )
}

export default React.memo(AppCounter)

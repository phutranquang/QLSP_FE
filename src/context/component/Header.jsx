import React, { useContext } from "react";
import { Row, Col } from "antd";
import SwitchComponent from './Switch';
import ChangeUIContext from "../share/context";

const HeaderComponent = () => {
    const { color } = useContext(ChangeUIContext)
    
    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={24}>
                            <SwitchComponent/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8}>
                            <p className={color}>This is Logo</p>
                        </Col>
                        <Col span={24}>
                            <h1 className={color}>This is Header</h1>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default React.memo(HeaderComponent)

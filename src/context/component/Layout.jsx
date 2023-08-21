import React from "react";
import { Row, Col } from "antd";
import ChangeUIContext from "../share/context";
import { useContext } from 'react';

const LayoutComponent = ({children}) => {
//    const dataContext = useContext(ChangeUIContext);
//    console.log(dataContext);
    const { bgColor } = useContext(ChangeUIContext);
    
    return (
        <Row>
            <Col span={20} offset={2}>
                {children}
            </Col>
        </Row>
    )
}

export default React.memo(LayoutComponent)
import React from "react";
import { Row, Col} from 'antd';

const FooterComponent = () => {
    return (
        <Row>
            <Col span={24}>
                <h1>This is Footer</h1>
            </Col>
        </Row>
    )
}
export default React.memo(FooterComponent)
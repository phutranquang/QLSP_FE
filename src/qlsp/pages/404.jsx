/* eslint-disable react-refresh/only-export-components */
import React from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, Result, Button } from "antd";
import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const NotfoundPage = () => {
    return (
        <LayoutMovies
            level1="Trang chủ"
            level2="Danh sách"
            level3="Không tìm thấy yêu cầu"
        >
            <Row>
                <Col span={24}>
                    <Result
                        status="404"
                        title="404"
                        subTitle="Đã xảy ra lỗi"
                        extra={
                            <Link to="/">
                                <Button type="primary">Back Home</Button>
                            </Link> 
                        }
                    />
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(NotfoundPage);
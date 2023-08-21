/* eslint-disable react-refresh/only-export-components */
import React from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
const SearchMovies = () => {
    const { name } = useParams();
    // lay ra duoc ten bo phim nguoi dung can tim kiem
    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3={`Tim kiem phim : ${name}`}
        >
            <Row>
                <Col span={24}>
                    <h4> Tim kiem phim</h4>
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(SearchMovies);
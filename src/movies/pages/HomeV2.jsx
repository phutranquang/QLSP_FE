/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, Skeleton } from "antd";
import ListMovies from "../components/ListMovies";
import PaginationMovies from "../components/Pagination";
import { useSelector, useDispatch } from 'react-redux';
import { getRequestDataHome } from "../actions/home";
import * as reselect from "../reselects/homeReselect";
import { createStructuredSelector } from "reselect";

// eslint-disable-next-line react-refresh/only-export-components
const HomeMovies = () => {
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    const { loading, movies, totalPage, totalResult } = useSelector(createStructuredSelector({
        loading: reselect.getLoadingDataHome,
        movies: reselect.getDataHomePage,
        totalPage: reselect.getDataTotalPage,
        totalResult: reselect.getDataTotalResult
    }));

    const changePageMovies = (p) => {
        if( p >= 1 && p <= totalPage){
            // cap nhat lai state page
            // p : so trang ma nguoi dung bam o giao dien
            setPage(p);
        }
    }

    useEffect(() => {
        dispatch(getRequestDataHome(page));
    }, [dispatch, page]);

    if(loading){
        return (
            <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim xem nhieu"
        >
            <Row>
                <Col span={24}>
                    <Skeleton active />
                </Col>
            </Row>
        </LayoutMovies>
        )
    }


    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim xem nhieu"
        >
            <Row>
                <Col span={24}>
                    <ListMovies movies={movies} />
                    {
                        movies.length > 0 
                        &&
                        <PaginationMovies
                            current={page}
                            total={totalResult}
                            changePage={changePageMovies}
                        />
                    }
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(HomeMovies);
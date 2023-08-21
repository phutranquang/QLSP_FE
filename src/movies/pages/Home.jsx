/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, Skeleton, Carousel } from "antd";
import { api } from "../services/api";
import { helpers } from "../helpers";
import ListMovies from "../components/ListMovies";
import PaginationMovies from "../components/Pagination";

import image1 from '../images/banner-img1.jpg';
import image2 from '../images/banner-img2.jpg';
import image3 from '../images/banner-img3.jpg';

const contentStyle = {
    margin: 0,
    height: '360px',
    lineHeight: '160px',
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
  };

// eslint-disable-next-line react-refresh/only-export-components
const HomeMovies = () => {
    const [loading, setLoading] = useState(true);
    const [popularMovies, setPopularMovies] = useState([]);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);


    useEffect(() => {
        // call 1 lan sau khi render
        let checking = false;
        const getData = async () => {
            setLoading(true);
            const dataMovies = await api.getDataPopularMovies(page);
            if(helpers.isEmptyObject(dataMovies)){
                // ko co du lieu
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu
                setPopularMovies(dataMovies['results']);
                if(page === 1 && !checking){
                    setTotalPage(dataMovies['total_pages']);
                    setTotalResult(dataMovies['total_results']);
                }
                setError(null);
            }
            setLoading(false); // hoan thanh
        }
        getData();
        // clean up
        return () => {
            checking = true;
        }
    }, [page]); // khi page thay doi thi useEffect tu dong no se chay lai (dieu kien cua useEffect)

    const changePageMovies = (p) => {
        if( p >= 1 && p <= totalPage){
            // cap nhat lai state page
            // p : so trang ma nguoi dung bam o giao dien
            setPage(p);
        }
    }

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

    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };

    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim xem nhieu"
        >
            <Carousel afterChange={onChange} autoplay>
            <div>
                <h3 style={contentStyle}>1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>4</h3>
            </div>
            </Carousel>
            <Row style={{ marginTop: '10px'}}>
                <Col span={24}>
                    <ListMovies
                        movies={popularMovies}
                    />
                    {
                        popularMovies.length > 0 
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
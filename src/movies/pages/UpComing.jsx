/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutMovies from "../components/Layout";
import { Row, Col, DatePicker, Skeleton } from "antd";
import moment from 'moment';
import { api } from "../services/api";
import { helpers } from "../helpers/index";
import ListMovies from "../components/ListMovies";
import PaginationMovies from "../components/Pagination";

const { RangePicker } = DatePicker;

// eslint-disable-next-line react-refresh/only-export-components
const UpcomingMovies = () => {
    let date  = new Date();
    let day   = date.getDate();
    day       = day < 10 ? `0${day}` : day;
    let month = date.getMonth()+1;
    month     = month < 10 ? `0${month}` : month;
    let year  = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    let nextDay   = moment(currentDate,"YYYY-MM-DD").add(1,'days').format("YYYY-MM-DD");
    let nextMonth = moment(currentDate,"YYYY-MM-DD").add(7,'days').format("YYYY-MM-DD");


    const [loading, setLoading] = useState(false);
    const [dataMovies, setDataMovies] = useState([]);
    const [errors, setErrors] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);
    const [sDate, setStartDate] = useState(nextDay);
    const [eDate,setEndDate]    = useState(nextMonth);


    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await api.getDataMoviesByDate(sDate, eDate, page);
            if(!helpers.isEmptyObject(data)){
                // co data
                setDataMovies(data['results']);
                setTotalPage(data['total_pages']);
                setTotalResult(data['total_results']);
                setErrors(null);
            } else {
                // khong co data
                setErrors({code: 404,mess: 'Not found data'});
            }
            setLoading(false);
        }
        getData();
    }, [sDate, eDate, page])

    const changeDate = async (date, dateString) => {
        const [startDate, endDate] = dateString;
        // cap nhat lai start date va end date
        // useEffect tu dong chay lai
        setStartDate(startDate); // sDate
        setEndDate(endDate); // eDate
    }

    const changePageMovies = (p) => {
        if( p >= 1 && p <= totalPage){
            // cap nhat lai state page
            // p : so trang ma nguoi dung bam o giao dien
            setPage(p);
            // state page thay doi thi useEffect chay lai
        }
    }

    if(errors !== null){
        return (
            <LayoutMovies
                level1="Trang chu"
                level2="Danh sach"
                level3="Phim sap ra rap"
            >
                <Row>
                    <Col span={24}>
                        <h3>{errors.mess}</h3>
                    </Col>
                </Row>
            </LayoutMovies>
        )
    }

    return (
        <LayoutMovies
            level1="Trang chu"
            level2="Danh sach"
            level3="Phim sap ra rap"
        >
            <Row>
                <Col span={24}>
                    <h4> Phim sap trinh chieu</h4>
                    <Row>
                        <Col span={24}>
                            <RangePicker
                                format={"YYYY-MM-DD"}
                                disabledDate={current => {
                                    return current && current < moment().endOf('day');
                                }}
                                onChange={(d, dt) => changeDate(d ,dt)}
                            />
                            <br/><br/>
                            { loading ? (
                                <Skeleton active />
                            ) : (
                                <>
                                    <ListMovies
                                        movies={dataMovies}
                                    />
                                    {
                                        dataMovies.length > 0 
                                        &&
                                        <PaginationMovies
                                            current={page}
                                            total={totalResult}
                                            changePage={changePageMovies}
                                        />
                                    }
                                </>
                            )}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </LayoutMovies>
    )
}

export default React.memo(UpcomingMovies);
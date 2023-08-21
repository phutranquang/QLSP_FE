/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Pagination } from 'antd';

const PaginationMovies = ({ current, total, changePage }) => {
    return (
        <Pagination
            current={current}
            total={total}
            pageSize={20}
            showSizeChanger={false}
            onChange={p => changePage(p)}
        />
    )
}
export default React.memo(PaginationMovies);
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Breadcrumb } from 'antd';

// eslint-disable-next-line react-refresh/only-export-components
const BreadcrumbMovies = (props) => {
    const items = [
        {title: props.level1},
        {title: props.level2},
        {title: props.level3},
    ];
    return (
        <Breadcrumb
            style={{
                margin: '16px 0',
            }}
            items={items}
        />
    )
}
export default React.memo(BreadcrumbMovies);
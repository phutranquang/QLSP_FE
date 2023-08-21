/* eslint-disable react-refresh/only-export-components */
import React from "react";
import LayoutProducts from "../components/Layout";


// eslint-disable-next-line react-refresh/only-export-components
const ShoppingCarts = () => {

    return (
        <LayoutProducts
            level1="Trang Chủ"
            level2="Danh sách"
            level3="Giỏ hàng"
        >
        </LayoutProducts>
    )
}

export default React.memo(ShoppingCarts);
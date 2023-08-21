import React from "react";
import { Layout, Menu, Input, Badge,theme, Button } from 'antd';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const { Sider } = Layout;

const SiderProducts = () => {

    const { pathname } = useLocation();

    let itemsMenus = [
        // {label: <NavLink >Sản Phẩm Đang Bán</NavLink>},
        // {label: <NavLink to="/phone"> + Điện thoại</NavLink>, key: '/phone'},
        // {label: <NavLink to="/laptop"> + Máy tính xách tay</NavLink>, key: '/laptop'},
        {label: <NavLink to="/home">Quản lý sản phẩm </NavLink>, key: '/home'},
        {label: <NavLink to="/donhang">Quản lý đơn hàng</NavLink>, key: '/donhang'},
        {label: <NavLink to="/kho">Quản lý kho</NavLink>, key: '/kho'},
        {label: <NavLink >+ Nhập hàng</NavLink>},
        {label: <NavLink >+ Xuất kho</NavLink>},
        {label: <NavLink to="/khachhang">Quản lý khách hàng</NavLink>, key: '/khachhang'},
        {label: <NavLink >Doanh Thu</NavLink>},
    ];

    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={pathname}
                items={itemsMenus}
            />
        </Sider>
    )
}
export default React.memo(SiderProducts);
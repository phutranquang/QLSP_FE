import React from "react";
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Menu, Input, Badge, Layout } from 'antd';
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const { Search } = Input;
const { Header } = Layout;

const HeaderCommerce = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    const searchProductByName = (nameProduct) => {
        nameProduct = nameProduct.trim();
        if(nameProduct.length > 0){
            // co nhap tu khoa
            navigate(`/search/${encodeURIComponent(nameProduct)}`);
        }
    }

    let itemsMenus = [
        {label: <NavLink to="/"> Trang chủ</NavLink>, key: '/'},
        {label: <NavLink to="/phone">Điện thoại</NavLink>, key: '/phone'},
        {label: <NavLink to="/laptop">Máy tính xách tay</NavLink>, key: '/laptop'},
        {label: <Search 
                    placeholder="Tìm kiếm"
                    enterButton 
                    style={{ marginTop: '15px'}}
                    onSearch={keyword => searchProductByName(keyword)}
                />
        },
        {label: <NavLink to="/shoppingcart">Giỏ hàng 
            <Badge count={3}>
                <ShoppingCartOutlined size="large" />
            </Badge>
        </NavLink>, key: '/shoppingcart'},
        {label: <NavLink to="/home">Đăng Nhập</NavLink>, key: '/home'},
    ];
    return (
        <Header
            style={{
                display: 'inline',
                alignItems: 'center',
            }}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={pathname}
                items={itemsMenus}
            ></Menu>
        </Header>
    )
}

export default React.memo(HeaderCommerce)
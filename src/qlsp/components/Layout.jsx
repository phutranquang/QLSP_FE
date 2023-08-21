/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import HeaderProducts from './partials/Header';
import ContentProducts from './partials/Content';
import FooterProducts from './partials/Footer';
import SiderProducts from './partials/Sider'
import { Layout } from 'antd';

const LayoutProducts = (props) => {
    return (
        <Layout className="layout">
            <HeaderProducts/>
            <Layout>
                <SiderProducts/>
                <ContentProducts
                    level1={props.level1}
                    level2={props.level2}
                    level3={props.level3}
                >
                    {props.children}
                </ContentProducts>
            </Layout>
            <FooterProducts/>
        </Layout>
    )
}
export default React.memo(LayoutProducts);
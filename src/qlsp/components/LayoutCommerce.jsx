/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import React from "react";
import HeaderCommerce from './partials/HeaderCommerce';
import ContentProducts from './partials/Content';
import FooterProducts from './partials/Footer';
import { Layout } from 'antd';

const LayoutCommerce = (props) => {
    return (
        <Layout className="layout">
            <HeaderCommerce/>
            <Layout>
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
export default React.memo(LayoutCommerce);
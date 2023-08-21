/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterProducts = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            VNNIC ©2023 Products App
        </Footer>
    )
}
export default React.memo(FooterProducts);
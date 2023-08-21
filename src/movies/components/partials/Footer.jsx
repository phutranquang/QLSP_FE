/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterMovies = () => {
    return (
        <Footer
            style={{
                textAlign: 'center',
            }}
        >
            ReactJS2302 ©2023 Movies App
        </Footer>
    )
}
export default React.memo(FooterMovies);
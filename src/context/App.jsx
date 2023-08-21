import React from "react";
import LayoutComponent from '../context/component/Layout';
import HeaderComponent from "../context/component/Header";
import ContentComponent from "../context/component/Content";
import FooterComponent from "../context/component/Footer";
import './styles/app.css';
import ProviderContext from "./share/provider";

export default function AppContext() {
    return (
        <ProviderContext>
            <LayoutComponent>
                <HeaderComponent/>
                <ContentComponent/>
                <FooterComponent/>
            </LayoutComponent>
        </ProviderContext>
    )
}

/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Layout } from "antd";
import BreadcrumbMovies from "./Breadcrumb";

const { Content } = Layout;

// eslint-disable-next-line react/prop-types
const ContentMovies = ({ children, level1, level2, level3 }) => {
  return (
    <Content
      style={{
        padding: "0 50px"
      }}
    >
        <BreadcrumbMovies
            level1={level1}
            level2={level2}
            level3={level3}
        />
        <div
            className="site-layout-content"
            style={{
                
                minHeight: "100vh",
                padding: "15px"
            }}
        >
            {children}
        </div>
    </Content>
  );
};
export default React.memo(ContentMovies);

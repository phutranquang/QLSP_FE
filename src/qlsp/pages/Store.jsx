/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutProducts from "../components/Layout";
import StoreTable from "../components/StoreTable";



// eslint-disable-next-line react-refresh/only-export-components
const Store = () => {

   
    return (
        <LayoutProducts>
            <StoreTable />
        </LayoutProducts>
    )
}

export default React.memo(Store);
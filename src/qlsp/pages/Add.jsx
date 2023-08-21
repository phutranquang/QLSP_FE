/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutProducts from "../components/Layout";
import AddTable from "./AddTable";
import CrudProduct from "../components/CrudProduct";



// eslint-disable-next-line react-refresh/only-export-components
const AddProduct = () => {

   
    return (
        <LayoutProducts>
            {/* <AddTable /> */}
            <CrudProduct/>
        </LayoutProducts>
    )
}

export default React.memo(AddProduct);
/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import LayoutProducts from "../components/Layout";
import { Skeleton } from "antd";
import { helpers } from "../helpers";
import { api } from "../services/api";
import CustomerTable from "../components/CustomerTable";



// eslint-disable-next-line react-refresh/only-export-components
const Customer = () => {

    const [loading, setLoading] = useState(true);
    const [customersAll, setDataCustomers] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        let checking = false;
        const getData = async () => {
            setLoading(true);
            const dataCustomers = await api.getDataCustomers();
            console.log(dataCustomers)
            if(helpers.isEmptyObject(dataCustomers)){
                // ko co du lieu
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu
                setDataCustomers(dataCustomers);
                setError(null);
            }
            setLoading(false); // hoan thanh
        }
        getData();
        return () => {
            checking = true;
        }
    },[]);

    if(loading){
        return (
            <LayoutProducts>
                <Skeleton active />
            </LayoutProducts>
        )
    }

    console.log(customersAll)

    return (
        <LayoutProducts>
            <CustomerTable customers={customersAll} />
        </LayoutProducts>
    )
}

export default React.memo(Customer);
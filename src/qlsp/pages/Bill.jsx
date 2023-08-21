/* eslint-disable react-refresh/only-export-components */
import React, { useState, useEffect } from "react";
import { Skeleton } from 'antd'
import LayoutProducts from "../components/Layout";
import BillTable from "../components/BillTable";
import { api } from "../services/api";
import { helpers } from "../helpers";


// eslint-disable-next-line react-refresh/only-export-components
const Bill = () => {

    const [loading, setLoading] = useState(true);
    const [dataBillAll, setDataBills] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        let checking = false;
        const getData = async () => {
            setLoading(true);
            const dataBills = await api.getDataBills();
            if(helpers.isEmptyObject(dataBills)){
                // ko co du lieu
                setError({
                    cod: 404,
                    mess: "Not found data"
                });
            } else {
                // co du lieu
                setDataBills(dataBills);
                setError(null);
            }
            setLoading(false); // hoan thanh
        }
        getData();
        // clean up
        return () => {
            checking = true;
        }
    },[]);

    console.log('Du lieu cha ')
    console.log(dataBillAll)

    if(loading){
        return (
            <LayoutProducts>
                <Skeleton active />
            </LayoutProducts>
        )
    }

    return (
        <LayoutProducts>
            <BillTable billData={dataBillAll} />
        </LayoutProducts>
    )
}

export default React.memo(Bill);
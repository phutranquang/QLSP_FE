import Global from "./component/Global";
import Countries from "./component/Countries";
import { Row,Col, Skeleton } from "antd";
import { useState, useEffect } from "react";
import { api } from "./services/api";


export default function VirusCorona() {
    // hooks: chi su dung trong function component
    // co tien to use
    const [loading, setLoading] = useState(true);
    const [virusGlobal, setDataGlobal] = useState({});
    const [virusCountries, setDataCountries] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const getData = async() => {
            setLoading(true); // bao hieu bat dau xu ly
            const data = await api.getDataVirusCorona();
            if (data.hasOwnProperty('Global') 
                && data.hasOwnProperty('Countries')) {
                // co du lieu
                setDataGlobal(data['Global']);
                setDataCountries(data['Countries']);
                setError(null)
            } else {
                // khong co du lieu
                setError({
                    cod: 500, mess: 'Not found data'
                });
            }
            setLoading(false); // hoan thanh
        }
        getData();
    },[]);

    // khi render xong giao dien thi se di call api
    if(loading) {
        return (
            <Row>
                <Col span={20} offset={2}>
                    <Skeleton active/>
                </Col>
            </Row>
        )
    }

    return (
        <Row>
            <Col span={20} offset={2}>
                <Global global = {virusGlobal}/>
                <Countries 
                    countries={virusCountries}/>
            </Col>
        </Row>
    )
}
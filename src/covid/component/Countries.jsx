import { Row, Col, Table} from 'antd';
import { NumericFormat } from 'react-number-format';

const columns = [
    {
        title: 'Country',
        dataIndex: 'Country',
        key: 'CountryCode'
    },
    {
        title: 'CountryCode',
        dataIndex: 'CountryCode',
        key: 'CountryCode'
    },
    {
        title: 'New Confirmed',
        dataIndex: 'NewConfirmed',
        key: 'CountryCode'
    },
    {
        title: 'Total Confirmed',
        dataIndex: 'TotalConfirmed',
        key: 'CountryCode',
        render: (text) => <NumericFormat value={text} 
                            allowLeadingZeros 
                            thousandSeparator="," 
                            displayType="text"/>
    },
    {
        title: 'New Deaths',
        dataIndex: 'NewDeaths',
        key: 'CountryCode'
    },
    {
        title: 'Total Deaths',
        dataIndex: 'TotalDeaths',
        key: 'CountryCode'
    },
    {
        title: 'New Recovered',
        dataIndex: 'NewRecovered',
        key: 'CountryCode'
    },
    {
        title: 'Total Recovered',
        dataIndex: 'TotalRecovered',
        key: 'CountryCode'
    },
    
]

const data = [
    {
        ID:"47bd8d11-a5a3-4155-9cb9-a0ab31cdffb1",
        Country:"Albania",
        CountryCode:"AL","Slug":"albania",
        NewConfirmed:14,
        TotalConfirmed:334457,
        NewDeaths:0,
        TotalDeaths:3598,
        NewRecovered:0,
        TotalRecovered:0,
        Date:"2023-05-12T11:07:40.081Z",
        Premium:{}
    }
]
const Countries = ({countries}) => {

    return (
        <Row style={{ marginBottom: '30px' }}>
            <Col span={24}>
                <Table columns={columns}
                        dataSource={countries}
                        rowKey='ID'>
                        
                </Table>
            </Col>
        </Row>
    )
}

export default Countries
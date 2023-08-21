import { Row, Col, Typography, Input } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

const { Title } = Typography;
const { Search } = Input;

const AddTodo = (props) => {
    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={24}>
                <Title level={2}> To do ! </Title>
                <Search
                    placeholder="name ..."
                    enterButton={<PlusOutlined/>}
                    onChange={props.change}
                    allowClear
                    onSearch={val => props.add(val)}
                    value={props.value}
                />
            </Col>
        </Row>
    )
}
// khai bao dinh nghia: kieu du lieu truyen vao cho props cua components
AddTodo.propTypes = {
    change: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired,
    value: PropTypes.string
}
export default AddTodo;
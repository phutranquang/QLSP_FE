
import React, { useState, useEffect } from 'react';
import { Button, Select,Input , Form, Popconfirm, Table, Typography } from 'antd';
import EditTableCell from './heplers/EditTableCell';
import { useNavigate } from "react-router-dom";
import { helpers } from '../helpers';
import { api } from '../services/api';

const { Search } = Input;

const TableProducts = ({ products }) => {

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const [form] = Form.useForm();
    const [data, setData] = useState(products);
    // const [dataNew, setDataNew] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.id === editingKey;

    const edit = (record) => {
        form.setFieldsValue({
            id: '',
            code: '',
            name: '',
            screen: '',
            chip: '',
            ram: '',
            price: '',
            discount: '',
            ...record,
          });
          setEditingKey(record.id);
    };
    const cancel = () => {
        setEditingKey('');
    };
    const save = async (id) => {
        try {
            const row = await form.validateFields();
            const newData = [...data];
            const index = newData.findIndex((item) => id === item.id);
            console.log('index la ' + index);
            console.log('Sua dong ')
            console.log(row)
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });

                setData(newData);
                setEditingKey('');

            } else {
                newData.push(row);
                
                setData(newData);
                setEditingKey('');

                //setDataNew(newData)
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
        
    };

    console.log('Du lieu sau khi thay doi : ' );
    console.log(data)
   

    async function saveToDataBase() {
        data.forEach(element => {
            const getData = async () => {
                const dataUp = await api.updateProductById(element.id, element);
                console.log(dataUp);
                if(helpers.isEmptyObject(dataUp)){
                    // ko co du lieu
                    setError({
                        cod: 404,
                        mess: "Not found data"
                    });
                }
            }
            getData();
        });
        console.log("OK")
    }

    // async function deleteItem (id) {
    //     const getData = async () => {
    //         const dataUp = await api.deleteProductById(id);
    //     }
    //     getData();
    // }

    const columns = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            width: '25%',
            editable: true,
        },
        {
            title: 'Mã SP',
            dataIndex: 'code',
            width: '10%',
            editable: true,
        },
        {
            title: 'Màn hình',
            dataIndex: 'screen',
            width: '15%',
            editable: true,
        },
        {
            title: 'CHIP',
            dataIndex: 'chip',
            width: '15%',
            editable: true,
        },
        {
            title: 'RAM',
            dataIndex: 'ram',
            width: '10%',
            editable: true,
        },
        {
            title: 'Giá bán',
            dataIndex: 'price',
            width: '15%',
            editable: true,
        },
        {
            title: '',
            render: (_, record) => {
            const editable = isEditing(record);
            return editable ? (
                <span>
                    <Typography.Link
                        onClick={() => save(record.id)}
                        style={{
                        marginRight: 4,
                        }}
                    >
                        Xong
                    </Typography.Link>
                    <Popconfirm title="Hủy chỉnh sửa?" onConfirm={cancel}>
                        <a>Hủy</a>
                    </Popconfirm>
                </span>
                ) : (
                    <span style={{ display: 'flex'}}>
                        <Typography.Link style={{marginRight: 4}} disabled={editingKey !== ''} onClick={() => edit(record)}>
                            Thay Đổi
                        </Typography.Link>
                        {/* <Popconfirm title="Xóa sản phẩm này?" onConfirm={deleteItem(record.id)}>
                            <a>Xóa</a>
                        </Popconfirm> */}
                    </span>
                    

                );
            },
        },
    ];
    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) => ({
                record,
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
          };
    });
    
    return (
            
        <>
            <Form form={form} component={false}>
                <Search placeholder="Tìm kiếm" enterButton="Search" size="medium" style={{ maxWidth: 500 }} />
                <Button type="primary" style={{ marginLeft: '10px', float: 'right'}} onClick={() => {saveToDataBase()}}> Lưu Chỉnh Sửa</Button>
                <Button type="primary" style={{ marginLeft: '10px', float: 'right'}} danger onClick={() => { navigate(`/add`)}}>Thêm sản phẩm</Button>
                
                <Table
                    components={{
                        body: {
                            cell: EditTableCell,
                        },
                    }}
                    style={{ marginTop: '10px'}}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    scroll={{
                        x: 1300,
                      }}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                    > 
                </Table>
            </Form>
        </>  
    );
}

export default React.memo(TableProducts);


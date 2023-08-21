/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Button, Select,Input , Form, Popconfirm, Table, Typography } from 'antd';
import EditTableCell from '../components/heplers/EditTableCell';

const storeData = [
    {
        id: '1',
        code: 'SP00x0',
        name: 'Sản phẩm xxx0',
        dateImport: '2021-07-07 14:16:14',
        priceImport: '12500000',
        currentInventory: '22',
    },
    {
        id: '2',
        code: 'SP00x1',
        name: 'Sản phẩm xxx1',
        dateImport: '2021-12-02 07:15:14',
        priceImport: '14500000',
        currentInventory: '25',
    },
    {
        id: '3',
        code: 'SP00x2',
        name: 'Sản phẩm xxx2',
        dateImport: '2021-11-09 09:16:14',
        priceImport: '16700000',
        currentInventory: '20',

    },

]
   

// eslint-disable-next-line react-refresh/only-export-components
const StoreTable = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState(storeData);
    const [dataNew, setDataNew] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.id === editingKey;
    const edit = (record) => {
        form.setFieldsValue({
            id: '',
            code: '',
            name: '',
            consignment: '',
            dateImport: '',
            priceImport: '',
            priceExport: '',
            currentInventory: '',
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
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                ...item,
                ...row,
            });
                setData(newData);
                setEditingKey('');

                setDataNew(newData)
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');

                setDataNew(newData)
            }
            console.log(newData)
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
          
    };
   
    const columns = [
        {
            title: 'Mã Sản Phẩm',
            dataIndex: 'code',
            width: '10%',
            editable: true,
        },
        {
            title: 'Tên Sản Phẩm',
            dataIndex: 'name',
            width: '20%',
            editable: true,
        },
        {
            title: 'Ngày Nhập',
            dataIndex: 'dateImport',
            width: '20%',
            editable: true,
        },
        {
            title: 'Giá nhập',
            dataIndex: 'priceImport',
            width: '20%',
            editable: true,
        },
        {
            title: 'Tồn kho',
            dataIndex: 'currentInventory',
            width: '15%',
            editable: true,
        },
        {
            title: '',
            render: (_, record) => {
            const editable = isEditing(record);
            return  (
                <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                    Chi tiết 
                </Typography.Link>
                )
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
                <h2>Quản lý kho hàng</h2>
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

export default React.memo(StoreTable);
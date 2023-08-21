/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Button, Select,Input , Form, Popconfirm, Table, Typography } from 'antd';
import EditTableCell from '../components/heplers/EditTableCell';
import { NavLink } from 'react-router-dom';


// eslint-disable-next-line react-refresh/only-export-components
const CustomerTable = ({ customers }) => {

    const [form] = Form.useForm();
    const [data, setData] = useState(customers);
    const [dataNew, setDataNew] = useState([]);
    const [editingKey, setEditingKey] = useState('');
    const isEditing = (record) => record.id === editingKey;
    const detailCustomer = (record) => {
        // form.setFieldsValue({
        //     id: '',
        //     name: '',
        //     address: '',
        //     phone: '',
        //     totalpurchase: '',
        //     ...record,
        //   });
        //   setEditingKey(record.id);
        navi
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
            title: 'ID',
            dataIndex: 'id',
            width: '10%',
        },
        {
            title: 'Tên Khách hàng',
            dataIndex: 'name',
            width: '20%',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            width: '25%',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            width: '15%',
        },
        {
            title: 'Tổng tích lũy',
            dataIndex: 'totalpurchase',
            width: '15%',
        },
        {
            title: '',
            render: (_, record) => {
            const editable = isEditing(record);
            return  (
                <NavLink disabled={editingKey !== ''} onClick={() => detailCustomer(record)}>
                    Chi tiết 
                </NavLink>
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
                <h2>Danh sách khách hàng</h2>
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

export default React.memo(CustomerTable);
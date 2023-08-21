/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Button, Select,Input , Form, Popconfirm, Table, Typography } from 'antd';
import EditTableCell from '../components/heplers/EditTableCell';


// eslint-disable-next-line react-refresh/only-export-components
const AddTable = () => {

    const [form] = Form.useForm();
    const [data, setData] = useState('');
    const [dataNew, setDataNew] = useState([]);
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
            
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
        
    };
   
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
            width: '18%',
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
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                     Sửa
                    </Typography.Link>
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

export default React.memo(AddTable);
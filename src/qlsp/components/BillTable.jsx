/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react';
import { Button, Form,Table, Typography } from 'antd';
import EditTableCell from '../components/heplers/EditTableCell';
import { NavLink } from 'react-router-dom';

   
// eslint-disable-next-line react-refresh/only-export-components
const BillTable = ({ billData }) => {

    const [form] = Form.useForm();
    const [data, setData] = useState(billData);
    const [dataNew, setDataNew] = useState([]);
    const [editingKey, setEditingKey] = useState('');

    // const isEditing = (record) => record.id === editingKey;

    const detailBill = (record) => {
        
        setEditingKey(record.id);
        console.log(record.id)
    };

    const cancel = () => {
        setEditingKey('');
    };
    // const save = async (id) => {
    //     try {
    //         const row = await form.validateFields();
    //         const newData = [...data];
    //         const index = newData.findIndex((item) => id === item.id);
    //         if (index > -1) {
    //             const item = newData[index];
    //             newData.splice(index, 1, {
    //             ...item,
    //             ...row,
    //         });
    //             setData(newData);
    //             setEditingKey('');

    //             setDataNew(newData)
    //         } else {
    //             newData.push(row);
    //             setData(newData);
    //             setEditingKey('');

    //             setDataNew(newData)
    //         }
    //     } catch (errInfo) {
    //         console.log('Validate Failed:', errInfo);
    //     }
    // };

    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            width: '10%',
        },
        {
            title: 'Ngày Bán',
            dataIndex: 'saleDate',
            width: '25%',
        },
        {
            title: 'Tổng Tiền',
            dataIndex: 'totalBill',
            width: '18%',
        },
        {
            title: '',
            render: (_, record) => {
            // const editable = isEditing(record);
            return  (
                <Button onClick={() => detailBill(record)}>
                    Chi tiết 
                </Button>
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
                // editing: isEditing(record),
            }),
          };
    });

    
    return (
            
        <>
            <Form form={form} component={false}>
                <h2>Danh sách đơn hàng</h2>
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
                    // rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                    > 
                </Table>
            </Form>
        </>  
    );
}

export default React.memo(BillTable);
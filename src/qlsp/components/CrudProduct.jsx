import React, { memo, useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table } from 'antd';
import { api } from '../services/api';
import { helpers } from '../helpers';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};

const CrudProduct = ({ }) => {
  const [ dataSource, setDataSource] = useState([]);
  //const [count, setCount] = useState(2);

  const defaultColumns = [
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
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm title="Xóa sản phẩm này?" onConfirm={() => handleDelete(record.id)}>
            <a>Xóa</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      //key: count,
      name: `Sản phẩm mới`,
      code: `Mã SP`,
      screen: `Màn hình`,
      chip: `Chip`,
      ram: `ram`,
      price: `giá`
    };
    setDataSource([...dataSource, newData]);
    //setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.id === item.id);
    const item = newData[index];
    newData.splice(index, -1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
    
  };

  const handleDelete = (id) => {
    const newData = dataSource.filter((item) => item.id !== id);
    setDataSource(newData);
  };

  console.log(dataSource);
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };

  async function saveToDataBase() {
    dataSource.forEach(element => {
        const getData = async () => {
            const dataUp = await api.saveProduct(element);
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
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <h2 style={{
          marginBottom: 16,
          float: 'left'
        }}> Thêm sản phẩm </h2>
        
      <Button
        type="primary"
        style={{
          marginBottom: 16,
          float: 'right'
        }}
        onClick={() => {
          saveToDataBase()
        }}
      >
        Lưu thay đổi
      </Button>
      <Button
        onClick={handleAdd}
        type="primary"
        danger
        style={{
          marginBottom: 16,
          float: 'right'
        }}
      >
        + Thêm sản phẩm
      </Button>

      <Table
        components={components}
        rowClassName={() => 'editable-row'}
        bordered
        dataSource={dataSource}
        columns={columns}
        scroll={{
          x: 1300,
        }}
      />
    </div>
  );
};

export default React.memo(CrudProduct)
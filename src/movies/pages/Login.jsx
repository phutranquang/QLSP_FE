/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { Row, Col, Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


const Login = () => {
    const { loading, login, errors } = useAuth();
    const onFinish = (values) => {
        login(values);
    };
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

  return (
    <Row>
      <Col span={12} offset={6}>
        { errors !== null && <p> {errors.mess}</p> }
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            marginTop: "20px",
            maxWidth: 600,
            padding: "5px",
            border: "1px solid #ccc"
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
          >
            <Button loading={loading} type="primary" htmlType="submit">
              Submit
            </Button>
            <Link to="/"> Quay ve trang chu</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};
export default React.memo(Login);

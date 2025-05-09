'use client';

import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';
import CustomButton from '@/components/customButton/page'


const Signup: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      const res = await axios.post('/api/signup', values);
      console.log('Signup success:', res.data);
      form.resetFields();
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-green-600">Sign Up</h2>
        <Form
          form={form}
          name="signup"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>


<Form.Item>
  <CustomButton type="signup" htmlType="submit" />
</Form.Item>

        </Form>
      </div>
    </div>
  );
};

export default Signup;

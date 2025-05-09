

'use client';

import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import CustomButton from '@/components/customButton/page'



const Login: React.FC = () => {
    const [form] = Form.useForm();
    const router = useRouter();


    const onFinish = async (values: any) => {
        try {
            const res = await axios.post('/api/login', values);
            console.log('Server response:', res.data);

            // Clear form after successful submission
            form.resetFields();
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Validation Failed:', errorInfo);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6 text-blue-600">Login</h2>
                <Form
                    form={form}
                    name="login"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    layout="vertical"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <CustomButton type="login" htmlType="submit" />
                    </Form.Item>
                    <Form.Item>
                        <CustomButton type="signup" htmlType="submit" block onClick={() => router.push('/signup')} />
                    </Form.Item>
                    {/* <Form.Item>
                        <CustomButton type="edit" htmlType="submit" />
                    </Form.Item>
                    <Form.Item>
                        <CustomButton type="delete" htmlType="submit" />
                    </Form.Item> */}

                </Form>
            </div>
        </div>
    );
};

export default Login;

import React from "react";
import { Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  let history = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="bg-red-400 h-screen w-screen p-10">
      <div className="container mx-auto bg-white rounded-xl p-12 flex items-center">
        <div className="w-2/3">
          <Form
            name="basic"
            layout="vertical"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 24,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label={<p className="text-blue-500 font-medium">Tài khoản</p>}
              name="taiKhoan"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tài khoản!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={<p className="text-blue-500 font-medium">Mật khẩu</p>}
              name="matKhau"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập mật khẩu!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <div className="flex justify-center">
              <button className="rounded px-5 py-2 text-white bg-red-500">
                Đăng nhập
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

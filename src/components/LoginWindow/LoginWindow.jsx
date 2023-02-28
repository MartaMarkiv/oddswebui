import { Form, Input } from "antd";
import { LoginForm, SubmitButton, ResetLink } from "./styles";
import { Title } from "../typography/Title/Title";


export const LoginWindow = ({ isOpen, toggleWindow }) => {
    const onFinish = (values) => {
        console.log('Success:', values);
      };
      
    return <LoginForm
        title={<Title>Sign in to OddsBender</Title>}
        open={isOpen}
        centered
        closable={false}
        onOk={() => toggleWindow(false)}
        onCancel={() => toggleWindow(false)}
        footer={null}
    >
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            style={{ maxWidth: 200 }}
            autoComplete="off"
        >
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
            >
            <Input 
                placeholder="Enter email"
                size="large"
                type="email"
            />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input
                    type="password"
                    placeholder="Enter password"
                    size="large"
                />
            </Form.Item>

            <Form.Item>
                <ResetLink>Forgot password?</ResetLink>
            </Form.Item>

            <Form.Item>
                <SubmitButton type="primary" htmlType="submit">
                    Sign in
                </SubmitButton>
            </Form.Item>
        </Form>
  </LoginForm>
}
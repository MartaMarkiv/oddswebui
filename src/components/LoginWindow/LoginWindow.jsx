import { Form, Input } from "antd";
import { LoginForm, SubmitButton, ResetLink } from "./styles";
import { Title } from "../typography/Title/Title";


export const LoginWindow = ({ isOpen, login }) => {

    const passwordValidation = (rule, value, callback) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
        if (regex.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject({message: 'Your password should be stronger.'});
        }
    }
      
    return <LoginForm
        title={<Title>Sign in to OddsBender</Title>}
        open={isOpen}
        centered
        closable={false}
        footer={null}
    >
        <Form
            name="ogin-form"
            className="login-form"
            initialValues={{ remember: false }}
            onFinish={login}
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
                rules={[{
                    required: true,
                    validator: passwordValidation
                }]}
            >
                <Input.Password
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
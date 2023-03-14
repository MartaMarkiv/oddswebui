import { Form, Input } from "antd";
import { SubmitButton } from "./styles";


export const ResetPassword = ({ reset }) => {

    const passwordValidation = (rule, value, callback) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
        if (regex.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject({message: "Your password should be stronger."});
        }
    }
      
    return (
        <Form
            name="reset-form"
            className="reset-form"
            initialValues={{ remember: false }}
            onFinish={reset}
            style={{ maxWidth: 200 }}
            autoComplete="off"
        >
            <Form.Item
                name="newPassword"
                rules={[{ required: true, message: "Please input your email!" }]}
            >
                <Input.Password
                    placeholder="Enter a new password"
                    size="large"
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
                    placeholder="Confirm your password"
                    size="large"
                />
            </Form.Item>

            <Form.Item>
                <SubmitButton type="primary" htmlType="submit">
                    Sign in
                </SubmitButton>
            </Form.Item>
        </Form>
    )
}
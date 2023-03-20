import { Form, Input } from "antd";
import { SubmitButton, FormDrawer } from "./styles";

export const ResetPassword = ({ reset }) => {

    const passwordValidation = (rule, value, callback) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/;
        if (!value) {
            return Promise.reject({message: "Please, enter your password!"});
        }
        if (regex.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject({
                message: "Passwords must have at least 8 characters and contain at least one uppercase letter, lowercase letter and number."
            });
                
        }
    }
      
    return (
        <FormDrawer
            name="reset-form"
            className="reset-form"
            initialValues={{ remember: false }}
            onFinish={reset}
            style={{ maxWidth: 200 }}
            autoComplete="off"
        >
            <Form.Item
                name="newPassword"
                rules={[{
                    required: true,
                    validator: passwordValidation
                }]}
                hasFeedback
            >
                <Input.Password
                    placeholder="Enter a new password"
                    size="large"
                />
            </Form.Item>

            <Form.Item
                name="password"
                dependencies={['newPassword']}
                hasFeedback
                rules={[
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                      },
                    }),
                  ]}
            >
                <Input.Password
                    placeholder="Confirm your password"
                    size="large"
                />
            </Form.Item>

            <Form.Item>
                <SubmitButton
                    type="primary"
                    htmlType="submit"
                >
                    Save a new password
                </SubmitButton>
            </Form.Item>
        </FormDrawer>
    )
}
import { useState } from "react";
import { Form, Input } from "antd";
import { LoginWrapper, SubmitButton, ResetLink, SubTitle } from "./styles";
import { Title } from "../typography/Title/Title";

export const LoginWindow = ({ isOpen, login }) => {

    const [isReset, setIsReset] = useState(false);
    const [isSentEmail, setIsSetEmail] = useState(false);

    const reset = ({email}) => {
        console.log(email);
        if (email) {
            setIsSetEmail(true);
        } else {
            setIsSetEmail(false);
            setIsReset(false);
        }
    }

    const goToReset = () => {
        setIsReset(true);
    }

    const passwordValidation = (rule, value, callback) => {
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
        if (regex.test(value)) {
            return Promise.resolve();
        } else {
            return Promise.reject({message: "Your password should be stronger."});
        }
    }
      
    return <LoginWrapper
        title={<Title>{isReset ? "Reset your password?" : "Sign in to OddsBender"}</Title>}
        open={isOpen}
        centered
        closable={false}
        footer={null}
    >
        {
            isReset ? 
            <Form
                name="reset-window"
                className="reset-window"
                initialValues={{ remember: false }}
                onFinish={reset}
                style={{ maxWidth: 200 }}
                autoComplete="off"
            >
                {
                    isSentEmail ? 
                    <>
                        <Form.Item className="subTitle">
                            <SubTitle>Enter the email to change your password.</SubTitle>
                        </Form.Item>
                        <Form.Item>
                            <SubmitButton type="primary" htmlType="submit">
                                Close
                            </SubmitButton>
                        </Form.Item>
                    </>:
                    <>
                        <Form.Item className="subTitle">
                        <SubTitle>Enter the email to change your password.</SubTitle>
                        </Form.Item>
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: "Please input your email!" }]}
                        >
                            <Input 
                                placeholder="Enter email"
                                size="large"
                                type="email"
                            />
                        </Form.Item>

                        <Form.Item>
                            <SubmitButton type="primary" htmlType="submit">
                                Reset
                            </SubmitButton>
                        </Form.Item>
                    </>
                }
                
                
            </Form> :
            <Form
                name="login-window"
                className="login-window"
                initialValues={{ remember: false }}
                onFinish={login}
                style={{ maxWidth: 200 }}
                autoComplete="off"
            >
                <Form.Item
                    name="email"
                    rules={[{ required: true, message: "Please input your email!" }]}
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
                    <ResetLink onClick={goToReset}>Forgot password?</ResetLink>
                </Form.Item>

                <Form.Item>
                    <SubmitButton type="primary" htmlType="submit">
                        Sign in
                    </SubmitButton>
                </Form.Item>
            </Form>
        }
  </LoginWrapper>
}
import { useState, useEffect } from "react";
import { Form, Input, notification } from "antd";
import axios from "axios";
import { LoginWrapper, SubmitButton, ResetLink, SubTitle } from "./styles";
import { Title } from "../typography/Title/Title";
import { OpportunityWrapper } from "../opportunity/OpportunityWrapper";
import opportunityData from "../../opportunity_data.json";
import { resetPasswordRequest, loginRequest } from "../../api/userRequests";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const LoginWindow = ({ isOpen, saveUser }) => {

    const [isReset, setIsReset] = useState(false);
    const [isSentEmail, setIsSetEmail] = useState(false);
    const [ipAddress, setIpAddress] = useState(null);

    const reset = ({email}) => {
        if (email) {
            resetPasswordRequest(email, data => {
                setIsSetEmail(true);
            })
        } else {
            setIsSetEmail(false);
            setIsReset(false);
        }
    }

    const goToReset = () => {
        setIsReset(true);
    }

    const onLogin = ({email, password}) => {
        loginRequest(email, password, ipAddress, data => {
            if (data.success) {
                saveUser(data.token);
                cookies.set('userBenderToken', data.token, { path: '/' });

            } else {
                notification.error({
                    message: "Error",
                    description: data.message || data.error,
                });
            }
        });
    };

    const getData = async () => {
        const res = await axios.get('https://api.db-ip.com/v2/free/self');
        const { data } = res;
        setIpAddress(data.ipAddress);
    }
    
    useEffect( () => {
        getData()
    }, [])
      
    return <>
        <OpportunityWrapper isPopular={true} isProp={true} listPopular={opportunityData} listProp={opportunityData}/>
        <LoginWrapper
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
                    onFinish={onLogin}
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
                            message: "Please input your password!"
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
  </>
}
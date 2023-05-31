import { useState } from "react";
import { Form, Input } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { SubmitButton, ResetLink, SubTitle, ErrorBlock } from "./styles";
import { OpportunityWrapper } from "../opportunity/OpportunityWrapper";
import opportunityData from "../../opportunity_data.json";
import { resetPasswordRequest, loginRequest } from "../../api/userRequests";
import Cookies from "universal-cookie";
import { ModalWindow } from "../ModalWindow";
const cookies = new Cookies();

export const LoginWindow = ({ isOpen, saveUser }) => {

    const [isReset, setIsReset] = useState(false);
    const [isSentEmail, setIsSentEmail] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [resultMessage, setResultMessage] = useState(null);

    const reset = ({resetEmail}) => {
        if (resetEmail) {
            resetPasswordRequest(resetEmail, data => {
                setResultMessage(data.success ? null : data.message);
                setIsSentEmail(true);
            })
        } else {
            setIsSentEmail(false);
            setIsReset(false);
        }
    }

    const goToReset = () => {
        setIsReset(true);
    }

    const onLogin = ({loginEmail: email, password}) => {
        loginRequest(email, password, data => {
            if (data.success) {
                saveUser({token: data.token, role: data.role});
                cookies.set('userBenderToken', data.token, { path: '/' });
                cookies.set('userBenderRole', data.role, { path: '/' });

            } else {
                setLoginError(data.message || data.error);
                setTimeout(() => setLoginError(null), 5000);
            }
        });
    };

    const goBack = () => {
        setIsReset(false);
        setIsSentEmail(false);
    }
      
    return <>
        <OpportunityWrapper isPopular={true} isProp={true} listPopular={opportunityData} listProp={opportunityData}/>
            <ModalWindow
                title={isReset ? "Reset your password?" : "Sign in to OddsBender"}
                isOpen={isOpen}
                isClosable={false}
            >
                {
                    isReset ?
                        isSentEmail ?
                            <>
                            {resultMessage ? <SubTitle>{resultMessage}</SubTitle>:
                                <>
                                    <SubTitle>We have sent instruction to email you entered.</SubTitle>
                                    <SubTitle>You will receive instructions in case you entered a correct email address.</SubTitle>
                                </>}
                            </>:
                            <SubTitle>Enter the email to change your password.</SubTitle>:
                        null
                }
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
                            <Form.Item>
                                <SubmitButton type="primary" htmlType="submit">
                                    Close
                                </SubmitButton>
                            </Form.Item>
                        </>:
                        <>
                            <ArrowLeftOutlined className="backArrow" onClick={goBack}/>
                            <Form.Item
                                name="resetEmail"
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
                        name="loginEmail"
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
                    <ErrorBlock>{loginError}</ErrorBlock>
                </Form>
            }
    </ModalWindow>
  </>
}
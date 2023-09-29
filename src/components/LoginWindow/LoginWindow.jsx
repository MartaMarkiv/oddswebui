import { useState } from "react";
import { Form, Input, Checkbox } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { SubmitButton, ResetLink, SubTitle, ErrorBlock } from "./styles";
import { OpportunityWrapper } from "../opportunity/OpportunityWrapper";
import opportunityData from "../../opportunity_data.json";
import { resetPasswordRequest, loginRequest } from "../../api/userRequests";
import  useAuthenticated from "../../shared/hooks/useAuthenticated";
import { ModalWindow } from "../ModalWindow";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const LoginWindow = ({ isOpen, saveUser }) => {
    const { handleLogin } = useAuthenticated();

    const [isReset, setIsReset] = useState(false);
    const [isSentEmail, setIsSentEmail] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [resultMessage, setResultMessage] = useState(null);
    const [rememberMe, setRememberMe] = useState(false || !!cookies.get('rememberMe', { path: '/' }));
    const defaultEmail = cookies.get('userBenderEmail', { path: '/' }) || '';

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
                handleLogin({ data , saveUser, rememberMe });
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

    const onChangeRememberMe = (e) => {
        const { checked } = e.target;
        setRememberMe(checked);
    }
      
    return <>
        <OpportunityWrapper isPopular={true} isProp={true} listPopular={opportunityData} listProp={opportunityData}/>
            <ModalWindow
                title={isReset ? "Reset your password?" : "Sign in"}
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
                    initialValues={{ remember: false, loginEmail: defaultEmail }}
                    onFinish={onLogin}
                    style={{ maxWidth: 200 }}
                    autoComplete="off"
                >
                    <Form.Item
                        name="loginEmail"
                        rules={[{ required: true, message: "Please input your email or username!" }]}
                    >
                        <Input 
                            placeholder="Enter email or username"
                            size="large"
                            type="text"
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
                        <Checkbox defaultChecked={rememberMe} onChange={onChangeRememberMe}>Remember me</Checkbox>
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
import { Form, Input } from "antd";
import { SubmitButton } from "./styles";
import { CloseOutlined } from "@ant-design/icons";
import { ModalWindow } from "../ModalWindow";

export const CreateUserWindow = ({ isOpen, create, close }) => {
    
    return <ModalWindow
        title={"Add new user"}
        isOpen={isOpen}
        isClosable={false}
    >
        <CloseOutlined 
            className="closeIcon"
            onClick={close}/>
        <Form
            name="create-user-form"
            className="createUserForm"
            initialValues={{ remember: false }}
            onFinish={create}
            style={{ maxWidth: 200 }}
            autoComplete="off"
        >
            <Form.Item
                name="firstName"
                rules={[{ required: true, message: "Please input first name!" }]}
            >
                <Input 
                    placeholder="First name"
                    size="large"
                    type="text"
                />
            </Form.Item>

            <Form.Item
                name="lastName"
                rules={[{ required: true, message: "Please input last name!" }]}
            >
                <Input
                    placeholder="Last name"
                    size="large"
                    type="text"
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
            >
                <Input 
                    placeholder="Email"
                    size="large"
                    type="email"
                />
            </Form.Item>

            <Form.Item>
                <SubmitButton type="primary" htmlType="submit">
                    Add new user
                </SubmitButton>
            </Form.Item>
        </Form>
  </ModalWindow>
}
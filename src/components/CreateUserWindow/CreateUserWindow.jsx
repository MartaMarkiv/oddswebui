import { Form, Input } from "antd";
import { CreateUserForm, SubmitButton } from "./styles";
import { Title } from "../typography/Title/Title";
import { CloseOutlined } from "@ant-design/icons";


export const CreateUserWindow = ({ isOpen, create, close }) => {
      
    return <CreateUserForm
        title={<Title>Add new user</Title>}
        open={isOpen}
        centered
        closable={false}
        footer={null}
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
                    placeholder="First email"
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
  </CreateUserForm>
}
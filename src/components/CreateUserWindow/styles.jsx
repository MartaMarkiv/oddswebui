import styled from "styled-components";
import { Modal, Button } from "antd";

const CreateUserForm = styled(Modal)`
    .ant-modal-title {
        text-align: center;
    }

    .ant-modal-body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .ant-modal-header {
        border: none;
        background: ${({theme}) => theme.colors.headerControls.bg};
    }

    .ant-modal-content {
        padding: 40px 0;
        background: ${({theme}) => theme.colors.headerControls.bg};
    }

    input {
        background: ${({theme}) => theme.colors.headerControls.bg};
    }
    
    input: hover {
        border-color: ${({theme}) => theme.colors.textSuccess};
    }

    input: focus {
        border-color: ${({theme}) => theme.colors.textSuccess};
        box-shadow: none;
    }

    .ant-form-item:last-child {
        margin-bottom: 0;
    }

    .closeIcon {
      font-size: 16px;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
`;

const SubmitButton = styled(Button)`
    color: ${({theme}) => theme.colors.textPrimary};
    font-family: ${({theme}) => theme.fonts.secondary};
    background: ${({theme}) => theme.colors.headerControls.bg};
    border: none;
    width: 100%;

    &:disabled {
        cursor: default;
        background: ${({theme}) => theme.colors.headerControls.bg};
    }

    &:hover {
        color: ${({theme}) => theme.colors.headerControls.bg};
        background: ${({theme}) => theme.colors.textPrimary};
    }
`;

const ResetLink = styled.div`
    color: ${({theme}) => theme.colors.linkColor};
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
    display: inline-block;
`

export {
  CreateUserForm,
    SubmitButton,
    ResetLink
}
import styled from "styled-components";
import { Button, Form } from "antd";

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

    &:focus {
        color: ${({theme}) => theme.colors.textPrimary};
        background: ${({theme}) => theme.colors.headerControls.bg};
    }

    &:hover {
        color: ${({theme}) => theme.colors.drawer.bg};
        background: ${({theme}) => theme.colors.textPrimary};
      }
`;

const FormDrawer = styled(Form)`
    .ant-input-affix-wrapper:hover,
    .ant-input-affix-wrapper:focus,
    .ant-input-affix-wrapper  {
        border-color: ${({theme}) => theme.colors.input.borderColor};
        background-color: ${({theme}) => theme.colors.input.bg};
    }

    .ant-input-affix-wrapper-status-error {
        background-color: ${({theme}) => theme.colors.input.bg} !important;
    }

    input {
        color: ${({theme}) => theme.colors.textPrimary};
        background-color: ${({theme}) => theme.colors.input.bg};
        &:focus {
            border-color: ${({theme}) => theme.colors.input.borderColor};
        }
    }

    .ant-input-password-icon.anticon {
        color: ${({theme}) => theme.colors.textPrimary};
    }

    .ant-input-affix-wrapper-focused {
        border-color: ${({theme}) => theme.colors.input.borderColor};
        box-shadow: ${({theme}) => "0 0 5px " + theme.colors.input.borderColor};
    }
`;

export {
    SubmitButton,
    FormDrawer
}
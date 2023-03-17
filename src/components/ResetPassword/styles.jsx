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
    .ant-input-affix-wrapper:focus  {
        border-color: ${({theme}) => theme.colors.textSuccess};
    }

    .ant-input-affix-wrapper-status-error {
        background-color: ${({theme}) => theme.colors.headerControls.bg} !important;
    }

    input {
        background-color: ${({theme}) => theme.colors.headerControls.bg};
        &:focus {
            border-color: ${({theme}) => theme.colors.textSuccess};
            box-shadow: none;
        }
    }

    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
        border-color: ${({theme}) => theme.colors.textSuccess};
        box-shadow: none;
    }

    .ant-input-password-icon.anticon {
        color: ${({theme}) => theme.colors.textPrimary};
    }

    .ant-input-affix-wrapper-focused {
        border-color: ${({theme}) => theme.colors.textSuccess};
        box-shadow: none;
    }
`;

export {
    SubmitButton,
    FormDrawer
}
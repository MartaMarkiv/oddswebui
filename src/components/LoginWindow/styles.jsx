import styled from "styled-components";
import { Modal, Button } from "antd";

const LoginWrapper = styled(Modal)`
    .ant-modal-title {
        text-align: center;
    }

    .ant-modal-body {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .ant-modal-header {
        border: none;
    }

    .ant-modal-content {
        padding: 40px 0;
    }

    input: hover {
        border-color: ${({theme}) => theme.colors.textSuccess};
    }

    input: focus {
        border-color: ${({theme}) => theme.colors.textSuccess};
        box-shadow: none;
    }

    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover {
        border-color: ${({theme}) => theme.colors.textSuccess};
        box-shadow: none;
    }

    .ant-form-item:last-child {
        margin-bottom: 0;
    }

    .reset-window {
        margin-top: 20px;
    }

    .subTitle {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
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
`;

const SubTitle = styled.div`
    color: ${({theme}) => theme.colors.textSecondary};
    font-size: 16px;
    font-weight: 500;
`

export {
    LoginWrapper,
    SubmitButton,
    ResetLink,
    SubTitle
}
import styled from "styled-components";
import { Modal } from "antd";

const WindowWrapper = styled(Modal)`
    .ant-modal-content {
        padding: 40px 0;
        background: ${({theme}) => theme.colors.modalWindow.bg};
        position: relative;
    }

    .ant-modal-header {
        border: none;
        background: ${({theme}) => theme.colors.modalWindow.bg};
    }

    .ant-modal-title {
        text-align: center;
        > h1 > a {
          margin: 0 auto;
        }
    }

    .ant-modal-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .ant-input-password:hover,
    .ant-input-affix-wrapper:hover,
    .ant-input-affix-wrapper-focused,
    .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover
    {
        color: ${({theme}) => theme.colors.textPrimary};
        background: ${({theme}) => theme.colors.input.bg};
        border-color: ${({theme}) => theme.colors.input.borderColor};
        box-shadow: ${({theme}) => "0 0 5px " + theme.colors.input.borderColor};
    }
    
    input,
    .ant-input-affix-wrapper,
    .ant-input-password {
        color: ${({theme}) => theme.colors.textPrimary};
        background: ${({theme}) => theme.colors.input.bg};
        border-color: ${({theme}) => theme.colors.input.borderColor};
        &:hover, &:focus {
            border-color: ${({theme}) => theme.colors.input.borderColor};
            box-shadow: ${({theme}) => "0 0 5px " + theme.colors.input.borderColor};
        }
        input:hover {
            box-shadow: none;
        }
    }

    .ant-input-status-error,
    .ant-input-affix-wrapper-status-error {
        background-color: ${({theme}) => theme.colors.input.bg} !important;
    }

    .ant-input-password-icon.anticon {
        color: ${({theme}) => theme.colors.textPrimary};
    }


    .ant-form {
        width: 100%;
    }

    .ant-form-item:last-child {
        margin-bottom: 0;
    }

    .reset-window {
        margin-top: 20px;
    }

    .closeIcon {
        font-size: 16px;
        color: ${({theme}) => theme.colors.textPrimary};
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .ant-btn-primaryx,
    input,
    .ant-input-affix-wrapper,
    .ant-input-password {
        border-radius: 4px;
    }

    .ant-btn-primary:hover,
    .ant-btn-primary:focus {
        color: ${({theme}) => theme.colors.headerControls.bg};
        background: ${({theme}) => theme.colors.textPrimary};
    }

    .backArrow {
        color: ${({theme}) => theme.colors.textPrimary};
        position: absolute;
        top: 10px;
        left: 10px;
        cursor: pointer;
    }
`;

export {
    WindowWrapper
}
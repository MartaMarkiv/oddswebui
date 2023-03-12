import styled from "styled-components";
import { Modal } from "antd";

const ConfirmWrapper = styled(Modal)`
    .ant-modal-content {
        padding: 30px 0;
    }
    .ant-modal-footer {
        border: none;
        text-align: center;

        button {
            width: 100px;
            color: ${({theme}) => theme.colors.textPrimary};
            background: ${({theme}) => theme.colors.drawer.bg};
            border: none;
            box-shadow: none;
          
            &&:hover {
              color: ${({theme}) => theme.colors.drawer.bg};
              background: ${({theme}) => theme.colors.textPrimary};
            }
          
            &&:focus {
              color: ${({theme}) => theme.colors.textPrimary};
              background: ${({theme}) => theme.colors.drawer.bg};
            }
          
            &&:active {
              border: none;
              box-shadow: none;
            }

            &.ant-btn-primary {
                background: ${({theme}) => theme.colors.logoColor};
            }
        }
    }
`;

const MessageWrapper = styled.div`
    color: ${({theme}) => theme.colors.textPrimary};
    font-family: ${({theme}) => theme.fonts.secondary};
    font-size: 18px;
    text-align: center;
`;

export {
    ConfirmWrapper,
    MessageWrapper
}
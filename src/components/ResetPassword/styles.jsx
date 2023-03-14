import styled from "styled-components";
import { Button } from "antd";

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

export {
    SubmitButton
}
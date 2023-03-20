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
    text-align: center;
`;

const ErrorBlock = styled.div`
    color: ${({theme}) => theme.colors.textDanger};
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

export {
    SubmitButton,
    ResetLink,
    SubTitle,
    ErrorBlock
}
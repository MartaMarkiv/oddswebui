import styled from "styled-components";

const CellBoxStyled = styled.div`
    width: 60px;
    min-height: 30px;
    border: 1px solid ${({theme, status}) => {
    switch (status) {
        case 'secondary':
            return theme.colors.betBox.borderSecondary;
        case 'success':
            return theme.colors.betBox.borderSuccess;
        case 'selected':
            return theme.colors.betBox.borderSelected;
        default:
            return theme.colors.betBox.borderPrimary;
    }
}};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    word-break: break-word;
    background: ${({theme, status}) => {
    switch (status) {
        case 'secondary':
            return theme.colors.betBox.bgSecondary;
        case 'success':
            return theme.colors.betBox.bgSuccess;
        case 'selected':
            return theme.colors.betBox.bgSelected;
        default:
            return theme.colors.betBox.bgPrimary;
    }
}};
    color: ${({theme, status}) => {
    switch (status) {
        case 'success':
            return theme.colors.betBox.textSuccess;
        default:
            return theme.colors.betBox.text;
    }
}};
  
  ${({status}) => (status === 'success' && { fontWeight: 500 })}
`;

export {
    CellBoxStyled
}
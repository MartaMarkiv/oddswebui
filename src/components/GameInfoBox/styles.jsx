import styled from "styled-components";

const CellBoxStyled = styled.div`
  width: 78px;
  height: 42px;
  border-radius: 4px;
  border: 1px solid ${({theme, status}) => {
    switch (status) {
        case 'secondary':
            return theme.colors.betBox.borderSecondary;
        case 'success':
            return theme.colors.betBox.borderSuccess;
        default:
            return theme.colors.betBox.borderPrimary;
    }
}};
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme, status}) => {
    switch (status) {
        case 'secondary':
            return theme.colors.betBox.bgSecondary;
        case 'success':
            return theme.colors.betBox.bgSuccess;
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
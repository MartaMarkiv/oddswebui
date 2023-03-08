import styled from "styled-components";

const ThStyled = styled.th`
  padding-left: 20px !important;
  padding-right: 20px !important;
  
  &&&&&& {
    background: ${({ theme }) => theme.colors.table.bg};
    border-color: ${({ theme }) => theme.colors.table.border};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  &&&&&&.bookHeader {
    background: ${({ theme }) => theme.colors.table.bgTh};
    color: ${({ theme }) => theme.colors.table.secondaryText};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    min-width: 150px;
  }
`

export {
    ThStyled
}

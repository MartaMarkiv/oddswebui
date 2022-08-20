import styled from "styled-components";

const ThStyled = styled.th`
  &&&&&& {
    background: ${({ theme }) => theme.colors.table.bg};
    border-color: ${({ theme }) => theme.colors.table.border};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  &&&&&&.bookHeader {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
  }
  
  &&&&&&.bookHeader, &&&&&&.subBookHeader {
    background: ${({ theme }) => theme.colors.table.bgTh};
    color: ${({ theme }) => theme.colors.table.bookHeaderText};
  }
`

export {
    ThStyled
}
import styled from "styled-components";

const Td = styled.td`
  
  &&&&& {
    background: ${({ theme }) => theme.colors.table.bg};
    border-color: ${({ theme }) => theme.colors.table.border};
    padding: 10px 0;
  }

  .ant-row {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`

export {
    Td
}
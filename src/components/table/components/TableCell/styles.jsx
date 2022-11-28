import styled from "styled-components";

const Td = styled.td`
  
  &&&&& {
    background: ${({ theme }) => theme.colors.table.bg};
    border-color: ${({ theme }) => theme.colors.table.border};
    padding: 0;
  }

  .ant-row {
    padding: 5px 0;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`

export {
    Td
}
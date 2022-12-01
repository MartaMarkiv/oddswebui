import styled from "styled-components";

const Td = styled.td`
  
  &&&&& {
    background: ${({ theme }) => theme.colors.table.bg};
    border-color: ${({ theme }) => theme.colors.table.border};
    padding: 0;
  }

  .ant-row {
    min-height: 65px;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
  }
`

export {
    Td
}
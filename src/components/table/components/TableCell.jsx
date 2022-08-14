import styled from "styled-components";


const Td = styled.td`
  &&&&& {
    background: ${({ theme }) => theme.colors.table.bg};
    border-color: ${({ theme }) => theme.colors.table.border};
  }

  .ant-row {
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
`

export const TableCell = (props) => {
    return <Td {...props} />
}
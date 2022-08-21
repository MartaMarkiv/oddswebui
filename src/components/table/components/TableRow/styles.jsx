import styled from "styled-components";

const Tr = styled.tr`

  &.firstRow {
    > td {
      border-top: 4px solid ${({theme}) => theme.colors.table.border};
    }
  }
`

export {
    Tr
}
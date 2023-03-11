import styled from "styled-components";

const StyledBettingTable = styled.div`
  .ant-table {
    background: ${({ theme }) => theme.colors.bgBody};
    color: ${({ theme }) => theme.colors.textPrimary};

    &.ant-table-middle {
      font-size: 13px;
    }

    .ant-table-body::-webkit-scrollbar {
      display: none;
    }

    .ant-table-cell {
      border-color: ${({ theme }) => theme.colors.table.border};
      padding: 0;
    }

    .userAction {
      text-align: center;
    }

    .ant-table-thead {
      font-size: 14px;
      background: ${({theme}) => theme.colors.headerControls.bg};
      color: ${({theme}) => theme.colors.textPrimary};
    }
  }
  
  &&& {
    .ant-table-container,
    .ant-table-container table {
      border-color: ${({ theme }) => theme.colors.table.border};
    }
  }
`;

const SessionWrap = styled.div`
`;

const EmptyData = styled.div`
  font-size: 20px;
  color: ${({theme}) => theme.colors.textPrimary};
`

export {
    StyledBettingTable,
    SessionWrap,
    EmptyData
}

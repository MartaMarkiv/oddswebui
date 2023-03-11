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

    .userActionButton {
      border: none;
      background: none;
      height: 100%;
      padding: 0;
      cursor: pointer;
      .userIcon {
        font-size: 20px;
        color: ${({theme}) => theme.colors.logoColor};
        font-weight: 600;
      }
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

const UserStatus = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
  }
`;

const SessionWrap = styled.div`
`

export {
    StyledBettingTable,
    UserStatus,
    SessionWrap
}

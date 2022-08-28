import styled from "styled-components";

const StyledBettingTable = styled.div`
  .ant-table {
    background: ${({ theme }) => theme.colors.bgBody};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  &&& {
    .ant-table-container,
    .ant-table-container table {
      border-color: ${({ theme }) => theme.colors.table.border};
    }
  }
  
  .sportsBookCell {
    min-width: 270px;
  }
  
  .gameCell {
    min-width: 130px;
    max-width: 130px;
    color: ${({ theme }) => theme.colors.table.secondaryText};
  }
  
  .subBookHeader {
    min-width: 96px;
    max-width: 96px;
  }
  
  .cellShadow {
    &:after {
      position: absolute;
      top: 0;
      right: 0;
      bottom: -1px;
      width: 30px;
      transform: translateX(100%);
      transition: box-shadow 0.3s;
      content: '';
      pointer-events: none;
      box-shadow: inset 10px 0 8px -8px rgb(0 0 0 / 15%);
    }
  }

  .betTypeCell {
    min-width: 140px;
    vertical-align: baseline;
    padding-top: 18px !important;
    padding-bottom: 18px !important;
    color: ${({ theme }) => theme.colors.table.secondaryText};
  }
`;

export {
    StyledBettingTable
}

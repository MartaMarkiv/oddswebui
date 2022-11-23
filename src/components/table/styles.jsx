import styled from "styled-components";

const StyledBettingTable = styled.div`
  .ant-table {
    background: ${({ theme }) => theme.colors.bgBody};
    color: ${({ theme }) => theme.colors.textPrimary};

    &.ant-table-middle {
      font-size: 13px;
    }
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
    min-width: 90px;
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
    padding: 18px 5px !important;
    color: ${({ theme }) => theme.colors.table.secondaryText};
  }

  .row-cell .selected:last-child {
    border-top: 2px solid #52DAA9;
    border-bottom: 2px solid #52DAA9;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 5px #52daa9;
    position: relative;
    &::before { 
      content: "";
      background-color: ${({ theme }) => theme.colors.bgBody};
      position:absolute;
      height: 100%;
      top:0;
      left:-10px;
      width: 10px;
    }
    &::after { 
      content: "";
      background-color: ${({ theme }) => theme.colors.bgBody};
      position:absolute;
      height: 100%;
      top:0;
      right:-10px;
      width: 10px;
    }
  }

  .ant-table-cell.first .row-cell .selected:last-child {
    border-left: 2px solid #52DAA9;
    &::before { 
      opacity: 0;
    }
  }

  .ant-table-cell.last .row-cell .selected:last-child {
    border-right: 2px solid #52DAA9;
    &::after { 
      opacity: 0;
    }
  }
`;

export {
    StyledBettingTable
}

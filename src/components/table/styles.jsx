import {Drawer} from "antd";
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
    min-width: 400px;
  }
  
  .gameCell {
    max-width: 280px;
    color: ${({ theme }) => theme.colors.table.secondaryText};
  }
  
  .subBookHeader {
    max-width: 85px;
    min-width: 75px;
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
    vertical-align: baseline;
    color: ${({ theme }) => theme.colors.table.secondaryText};
    padding: 10px !important;
    min-width: 120px
  }

  .row-cell {
    padding: 5px;
    &.selected-game-row {
      border-top: 2px solid #52DAA9;
      border-bottom: 2px solid #52DAA9;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 0px 5px #52daa9;
      position: relative;
      &::before { 
        content: "";
        background-color: ${({ theme }) => theme.colors.bgBody};
        position:absolute;
        height: 100%;
        top:0;
        left: -5px;
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

    .cell {
      width: 100%;
      &:first-child {
        margin-bottom: 3px;
      }
    }
  }

  .ant-table-cell.first .row-cell {
    &.selected-game-row {
      border-left: 2px solid #52DAA9;
      &::before { 
        opacity: 0;
      }
    }
  }

  .ant-table-cell.last .row-cell.selected-game-row {
    border-right: 2px solid #52DAA9;
    &::after { 
      opacity: 0;
    }
  }
`;

const DrawerStyled= styled(Drawer)`
  .ant-drawer-content, .ant-drawer-header {
    background: ${({theme}) => theme.colors.drawer.bg};
    border-color: ${({theme}) => theme.colors.drawer.bg};
  }

  .ant-drawer-header {
    position: relative;
    padding: 0 12px;
    max-height: 90px;
    flex-grow: 1;
    
    align-items: center;
    justify-content: space-between;
  }

  .ant-drawer-body {
    padding: 0 12px;
  }

  .ant-drawer-title {
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    color: ${({theme}) => theme.colors.textPrimary};
    font-family: ${({theme}) => theme.fonts.secondary};
  }

  .ant-drawer-close {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .ant-drawer-close {
    color: ${({theme}) => theme.colors.headerControls.icon};
    
    path {
      fill: ${({theme}) => theme.colors.headerControls.icon};
    }

    z-index: 15;
  }

  .ant-drawer-extra {
    margin-right: 60px;
  }
  
  .ant-drawer-content-wrapper {
    box-shadow: none;
  }

  .ant-drawer-body .spinner {
    background: none;
  }
    
`

export {
    StyledBettingTable,
    DrawerStyled
}

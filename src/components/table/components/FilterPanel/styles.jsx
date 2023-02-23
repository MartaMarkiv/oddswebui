import { Drawer } from "antd";
import styled from "styled-components";
import {Button} from "../../../../shared/styles";
import {ReactComponent as Close} from "../../../../assets/icons/close.svg";

const FilterPanelContainer = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0;
  margin-right: 12px;
`;

const FilterPanelItem = styled.li`
  display: block;
  margin-right: 12px;
  margin-bottom: 12px;
`;

const DrawerStyled = styled(Drawer)`
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
    min-height: 100px;
    height: auto !important;
    
    .ant-drawer-wrapper-body {
      padding-top: 20px;
      padding-bottom: 8px;
    }
  }

`;


const ButtonStyled = styled(Button)`
  &:hover {
    path {
      stroke: ${({theme}) => theme.colors.button.arrowHover};   
    }
  }
`;

const CloseIcon = styled(Close)``;

const SettingsTitle = styled.div`
font-size: 16px;
font-weight: 500;
color: ${({theme}) => theme.colors.textPrimary};
`;

export {
    FilterPanelContainer,
    FilterPanelItem,
    DrawerStyled,
    CloseIcon,
    SettingsTitle
}
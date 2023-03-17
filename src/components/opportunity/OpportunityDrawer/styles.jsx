import styled from "styled-components";
import {ReactComponent as Star} from "../../../assets/icons/star.svg";
import {ReactComponent as Close} from "../../../assets/icons/close.svg";

const OpportunityButton = styled.button`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 100%;
  background: ${({theme}) => theme.colors.headerControls.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  path {
    stroke: ${({theme}) => theme.colors.headerControls.starStroke};
    fill: ${({theme}) => theme.colors.headerControls.starBg};
  }

  &:hover {
    background: ${({theme}) => theme.colors.headerControls.bgHover};
    
    path {
      stroke: ${({theme}) => theme.colors.headerControls.starStrokeHover};
    } 
  }

  &:disabled {
    cursor: default;
    background: ${({theme}) => theme.colors.headerControls.bg};
    path {
      stroke: ${({theme}) => theme.colors.headerControls.starStroke};
      fill: ${({theme}) => theme.colors.headerControls.starBg};
    } 
  }
`;

const StarIcon = styled(Star)`

`

const DrawerStyled= styled.div`
  &.ant-drawer {
    z-index: 10;
  }
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .ant-drawer-content, .ant-drawer-header {
    background: ${({theme}) => theme.colors.drawer.bg};
    border-color: ${({theme}) => theme.colors.drawer.bg};
  }

  .ant-drawer-header {
    position: relative;
    padding: 0 12px;
    max-height: 56px;
    flex-grow: 1;
    
    align-items: center;
    justify-content: space-between;
  }

  .ant-drawer-body {
    padding: 0;
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
    filter: ${({blur}) => blur ? 'blur(2px)' : ''};
  }

  .ant-drawer-body .spinner {
    background: none;
  }
    
`

const CloseIcon = styled(Close)``

export {
    OpportunityButton,
    DrawerStyled,
    StarIcon,
    CloseIcon
}

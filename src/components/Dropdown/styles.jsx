import {Dropdown, Popover} from 'antd';
import styled from "styled-components";
import {ReactComponent as Arrow} from "../../assets/icons/arrow.svg";
import {Button} from "../../shared/styles";

const DropdownStyled = styled(Dropdown)``;

const DropdownTrigger = styled(Button)`
  &:hover {
    .dropdownCount {
      background: ${({theme}) => theme.colors.button.countBgHover};
      color: ${({theme}) => theme.colors.button.countTextHover};
    }

    path {
      fill: ${({theme}) => theme.colors.button.arrowHover};
    }
  }
`;

const Count = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  font-weight: 500;
  background: ${({theme}) => theme.colors.button.countBg};
  color: ${({theme}) => theme.colors.button.countText};
  margin: 0 6px;
`;

const ArrowIcon = styled(Arrow)`
  width: 12px;
  height: 6px;
  transition: transform .2s ease-in;

  ${({visible}) => visible && { transform: 'rotate(-180deg)' }} 
  
  path {
    fill: ${({theme}) => theme.colors.button.arrow};
  }
`;

const DropdownMenuStyled = styled.div`
  max-height: 340px;
  overflow: auto;
  padding: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #000000;
`;

const DropdownMenuItem = styled.div`
  display: flex;
  align-items: center;
  height: 24px;
  
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`

const PopoverStyled = styled(Popover)`
  
  .ant-popover-inner-content {
    padding: 0 !important;
  }

  .ant-popover-inner {
    background: ${({theme}) => theme.colors.dropdown.submenu.bg};
    border: 1px solid ${({theme}) => theme.colors.dropdown.submenu.border};
    box-shadow: 0 4px 14px ${({theme}) => theme.colors.dropdown.submenu.shadow};
    border-radius: 4px;
  }
  
  .ant-popover-arrow {
    display: none;
  }

  .ant-popover-placement-bottom, .ant-popover-placement-bottomLeft, .ant-popover-placement-bottomRight {
    padding-top: 2px;
  }
  
`

const DropdownContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export {
    DropdownStyled,
    DropdownTrigger,
    Count,
    ArrowIcon,
    DropdownMenuStyled,
    PopoverStyled,
    DropdownContainer,
    DropdownMenuItem
}
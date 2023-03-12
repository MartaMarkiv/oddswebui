import styled from "styled-components";
import { Button, Dropdown } from "antd";

const MenuButton = styled(Button)`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.textPrimary};
  background: ${({theme}) => theme.colors.drawer.bg};
  border: none;
  box-shadow: none;

  &&:hover {
    color: ${({theme}) => theme.colors.drawer.bg};
    background: ${({theme}) => theme.colors.textPrimary};
  }

  &&:focus {
    color: ${({theme}) => theme.colors.textPrimary};
    background: ${({theme}) => theme.colors.drawer.bg};
  }

  &&:active {
    border: none;
    box-shadow: none;
  }
`;

const MenuWrapper = styled(Dropdown)`
  li.ant-dropdown-menu-item {
    padding: 4px 20px;
  }
`;

export {
  MenuButton,
  MenuWrapper
}
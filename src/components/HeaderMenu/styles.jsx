import styled from "styled-components";
import { Button } from "antd";

const MenuButton = styled(Button)`
  color: ${({theme}) => theme.colors.textPrimary};
  background: ${({theme}) => theme.colors.drawer.bg};
  width: 48px;
  height: 48px;
  border-radius: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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

export {
  MenuButton
}
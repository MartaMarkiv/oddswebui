import styled from "styled-components";

export const Button = styled.button`
  -webkit-appearance: none;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 14px;
  background: ${({theme}) => theme.colors.button.bg};
  border: 1px solid ${({theme}) => theme.colors.button.bg};
  border-radius: 4px;
  transition: all .2s;
  box-shadow: none;
  outline: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({theme}) => theme.colors.button.text};
  cursor: pointer;
  
  &:hover {
    background: ${({theme}) => theme.colors.button.bgHover};
    border-color: ${({theme}) => theme.colors.button.bgHover};
    color: ${({theme}) => theme.colors.button.textHover};
  }
`;
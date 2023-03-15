import styled from "styled-components";

import {Checkbox} from 'antd';

const CheckBoxStyled = styled(Checkbox)`
  .ant-checkbox {
    top: -1px;
  }
  
  .ant-checkbox-inner {
    width: 18px;
    height: 18px;
    border: 2px solid ${({theme}) => theme.colors.dropdown.checkbox.border};
    background: transparent;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    border-color: ${({theme}) => theme.colors.dropdown.checkbox.active.border};
    background-color: ${({theme}) => theme.colors.dropdown.checkbox.active.bg};

    &:after {
      border-color: ${({theme}) => theme.colors.dropdown.checkbox.active.icon};
    }
  }

  .ant-checkbox-checked::after {
    border-color: ${({theme}) => theme.colors.dropdown.checkbox.active.border};
  }

  &.ant-checkbox-wrapper:hover .ant-checkbox-inner,
  &.ant-checkbox:hover .ant-checkbox-inner,
  &.ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({theme}) => theme.colors.dropdown.checkbox.active.border};
  }

  .ant-checkbox-wrapper:hover .ant-checkbox-inner, 
  .ant-checkbox:hover .ant-checkbox-inner, 
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${({theme}) => theme.colors.dropdown.checkbox.active.border};
  }

  .ant-checkbox + span {
    font-weight: 400;
    padding-left: 5px;
    color: ${({theme}) => theme.colors.dropdown.submenu.text};
  }

  &.ant-checkbox-wrapper {
    display: flex;
    align-items: center;
    margin-left: 15px;
    
    &::after {
      display: none;
    }
  }
`;


const Label = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({theme}) => theme.colors.dropdown.submenu.text};
`

const SettingsBoxStyled = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: ${({theme}) => theme.colors.textSecondary};
  margin-right: 20px;
`;

const TextGroup = styled.div`
  display: flex;
`;

export {
  SettingsBoxStyled,
  Text,
  TextGroup,
  CheckBoxStyled,
  Label
}

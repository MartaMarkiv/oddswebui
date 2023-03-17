import styled from "styled-components";
import { Form } from "antd";

const EditForm = styled(Form)`
`;

const FormItem = styled(Form.Item)`
  margin: 0;
  input {
    color: ${({theme}) => theme.colors.textPrimary};
    background: ${({theme}) => theme.colors.headerControls.bg};
  }

  input: hover {
    border-color: ${({theme}) => theme.colors.headerControls.bg};
  }

  input: focus {
    border-color: ${({theme}) => theme.colors.headerControls.bg};
    box-shadow: none;
  }
`

export {
  EditForm,
  FormItem
}
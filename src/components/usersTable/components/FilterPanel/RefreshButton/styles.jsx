import styled from "styled-components";
import {Button} from "../../../../../shared/styles";

const RefreshButtonStyled = styled(Button)`
  &:hover {
    path {
      fill: ${({theme}) => theme.colors.button.arrowHover};
    }
  }
`

export {
    RefreshButtonStyled
}
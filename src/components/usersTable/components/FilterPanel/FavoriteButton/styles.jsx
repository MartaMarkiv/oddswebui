import styled from "styled-components";
import {Button} from "../../../../../shared/styles";

const FavoriteButtonStyled = styled(Button)`
  &:hover {
    path {
      stroke: ${({theme}) => theme.colors.button.arrowHover};   
    }
  }
`

export {
    FavoriteButtonStyled
}
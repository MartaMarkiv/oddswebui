import styled from "styled-components";

const TitleStyled = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  color: ${({theme}) => theme.colors.textPrimary};
  font-family: ${({theme}) => theme.fonts.secondary};
`

export {
    TitleStyled
}
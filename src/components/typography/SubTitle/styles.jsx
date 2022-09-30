import styled from "styled-components";

const SubTitleStyled = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: ${({theme}) => theme.colors.textPrimary};
  font-family: ${({theme}) => theme.fonts.secondary};
`

export {
    SubTitleStyled
}
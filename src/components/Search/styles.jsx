import styled from "styled-components";

const SearchStyled = styled.div`
  width: 48px;
  height: 48px;
  background: ${({theme}) => theme.colors.headerControls.bg};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${({theme}) => theme.colors.headerControls.bgHover};
    
    > svg {
      color: ${({theme}) => theme.colors.headerControls.iconHover};
    }
  }
  
  > svg {
    color: ${({theme}) => theme.colors.headerControls.icon};
  }
`;

export {
    SearchStyled
}
import styled from "styled-components";

const SwitcherContainer = styled.div`
  height: 32px;
  background: ${({theme}) => theme.colors.bgBody};
  border-radius: 180px;
  display: flex;
  overflow: hidden;
`;

const SwitcherInputContainer = styled.div`
  position: relative;
`;

const SwitcherInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  
  &:checked {
    ~ label {
      background: ${({theme}) => theme.colors.bgContrast};
      color: ${({theme}) => theme.colors.textContrast};
    }
  }
`;

const SwitcherLabel = styled.label`
  cursor: pointer;
  user-select: none;
  padding: 0 18px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
  color: ${({theme}) => theme.colors.textPrimary};
`;

export {
    SwitcherContainer,
    SwitcherLabel,
    SwitcherInput,
    SwitcherInputContainer
}
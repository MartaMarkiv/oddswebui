import styled from "styled-components";

const SwitcherContainer = styled.div`
  height: 48px;
  padding: 8px;
  background: ${({theme}) => theme.colors.drawer.bg};
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

  &:disabled + label {
    cursor: default;
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
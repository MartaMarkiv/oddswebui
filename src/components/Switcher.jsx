import styled from "styled-components";
import {useState} from "react";


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

export const Switcher = ({
                             leftText,
                             rightText,
                             leftValue,
                             rightValue,
                             name,
                             initialValue,
                             onUpdate
                         }) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);

    const checkHandler = e => {
        setSelectedValue(e.target.value);
        onUpdate && onUpdate(e.target.value)
    };


    return <SwitcherContainer>
        <SwitcherInputContainer>
            <SwitcherInput
                type="radio"
                id={leftValue}
                value={leftValue}
                name={name}
                onChange={checkHandler}
                checked={selectedValue === leftValue}/>
            <SwitcherLabel htmlFor={leftValue}>{leftText}</SwitcherLabel>
        </SwitcherInputContainer>
        <SwitcherInputContainer>
            <SwitcherInput
                type="radio"
                id={rightValue}
                value={rightValue}
                name={name}
                onChange={checkHandler}
                checked={selectedValue === rightValue}/>
            <SwitcherLabel htmlFor={rightValue}>{rightText}</SwitcherLabel>
        </SwitcherInputContainer>
    </SwitcherContainer>
}
import {useState} from "react";
import {SwitcherContainer, SwitcherInput, SwitcherInputContainer, SwitcherLabel} from "./styles";
import { useCurrentUser } from "../../shared/context/UserProvider";

export const Switcher = ({
    leftText,
    rightText,
    leftValue,
    rightValue,
    name,
    initialValue,
    onUpdate,
    isProp,
    isPopular
}) => {
    const [selectedValue, setSelectedValue] = useState(initialValue);
    const { currentUser } = useCurrentUser();

    const checkHandler = e => {
        if (!currentUser) return;
        setSelectedValue(e.target.value);
        onUpdate && onUpdate(e.target.value)
    };

    return <SwitcherContainer>
        <SwitcherInputContainer>
            <SwitcherInput
                type="radio"
                id={leftValue}
                disabled={!(isProp || isPopular) || !currentUser}
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
                disabled={!(isProp || isPopular) || !currentUser}
                name={name}
                onChange={checkHandler}
                checked={selectedValue === rightValue}/>
            <SwitcherLabel htmlFor={rightValue}>{rightText}</SwitcherLabel>
        </SwitcherInputContainer>
    </SwitcherContainer>
}
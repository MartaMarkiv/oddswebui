import {useRef, useState} from "react";

import {
    ArrowIcon,
    Count,
    DropdownContainer,
    DropdownMenuItem,
    DropdownMenuStyled,
    DropdownTrigger,
    PopoverStyled,
    CheckBoxStyled,
    Label,
} from "./styles";

const checkboxRender = ({options, onChange, selectedItems}) => {

    return (
        <DropdownMenuStyled>
            <CheckBoxStyled.Group onChange={onChange} value={selectedItems}>
                {options.map(({key, label}) => {
                    const [team1, team2] = label.split('@');
                    return (
                        <DropdownMenuItem key={key}>
                            <CheckBoxStyled
                                key={key}
                                value={key}
                            >
                                <Label bold>{team1}</Label>
                                { team2 && '@' }
                                <Label>{team2}</Label>
                            </CheckBoxStyled>
                        </DropdownMenuItem>
                    );
                })}
            </CheckBoxStyled.Group>
        </DropdownMenuStyled>
    );
};

export const Dropdown = ({
    options,
    value = [],
    onChange,
    count = 0,
    triggerText,
    name
}) => {

    const [selectedItems, setSelectedItems] = useState([]);

    const onChangeHandler = selection => {
        setSelectedItems([...selection]);
        onChange && onChange([...selection]);
    };

    const ref = useRef();

    return <PopoverStyled
        content={checkboxRender({options, selectedItems, onChange: onChangeHandler})}
        trigger="click"
        placement="bottomLeft"
        getPopupContainer={() => ref.current}
    >
        <DropdownContainer ref={ref}>
            <DropdownTrigger onClick={(e) => e.preventDefault()}>
                {triggerText} <Count className="dropdownCount">{count || selectedItems.length}</Count> <ArrowIcon/>
            </DropdownTrigger>
        </DropdownContainer>
    </PopoverStyled>
}

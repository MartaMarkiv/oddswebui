import {useRef, useState} from "react";
import {Checkbox} from "antd";
import {
    ArrowIcon,
    Count,
    DropdownContainer,
    DropdownMenuItem,
    DropdownMenuStyled,
    DropdownTrigger,
    PopoverStyled
} from "./styles";
import {StringParam, useQueryParam} from "use-query-params";

const checkboxRender = ({options, onChange, selectedItems}) => {

    return (
        <DropdownMenuStyled>
            <Checkbox.Group onChange={onChange} value={selectedItems}>
                {options.map(({key, label}) => {
                    return (
                        <DropdownMenuItem key={key}>
                            <Checkbox
                                key={key}
                                value={key}
                            >
                                {label}
                            </Checkbox>
                        </DropdownMenuItem>
                    );
                })}
            </Checkbox.Group>
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
    const [query, setQuery] = useQueryParam(name);

    const [selectedItems, setSelectedItems] = useState([...value, ...(query?.split(',') || [])]);

    const onChangeHandler = selection => {
        setSelectedItems([...selection]);
        onChange && onChange([...selection]);

        setQuery(selection.length ? [...selection] : undefined, 'pushIn');
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
import {Dropdown} from "../../../../Dropdown";

export const BetsFilter = ({bets, changeFilter}) => {

    return (
        <Dropdown
            triggerText="Bets"
            name="bets"
            options={bets}
            onChange={changeFilter}
        />
    )
}

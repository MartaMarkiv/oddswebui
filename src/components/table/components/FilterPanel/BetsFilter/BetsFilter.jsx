import {Dropdown} from "../../../../Dropdown";

export const BetsFilter = ({bets}) => {

    return (
        <Dropdown
            triggerText="Bets"
            name="bets"
            options={bets}
        />
    )
}

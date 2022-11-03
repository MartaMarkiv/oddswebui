import {Dropdown} from "../../../../Dropdown";
import { QUARTERS_FILTERS } from "../../../../../constants";

export const BetsShownFilter = ({changeFilter, quarters}) => {

    return (
        <Dropdown
            triggerText="Bets Shown"
            name="betsShown"
            options={QUARTERS_FILTERS}
            onChange={changeFilter}
            values={quarters}
        />
    )
}

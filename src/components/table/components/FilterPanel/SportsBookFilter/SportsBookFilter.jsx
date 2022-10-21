import {Dropdown} from "../../../../Dropdown";

export const SportsBookFilter = ({ books, changeFilter }) => {
    return (
        <Dropdown
            triggerText="Sports book"
            name="sportsBook"
            options={books}
            onChange={changeFilter}
        />
    )
}

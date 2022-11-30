import {Dropdown} from "../../../../Dropdown";

export const GamesFilter = ({games}) => {

    return (
        <Dropdown
            triggerText="Games"
            name="games"
            options={games}
        />
    )
}

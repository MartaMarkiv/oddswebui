import {Dropdown} from "../../../../Dropdown";

export const GamesFilter = ({games, selectGame}) => {

    return (
        <Dropdown
            triggerText="Games"
            name="games"
            options={games}
            onChange={selectGame}
        />
    )
}

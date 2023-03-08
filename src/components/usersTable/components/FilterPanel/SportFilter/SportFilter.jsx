import {Dropdown} from "../../../../Dropdown";

export const SportFilter = ({sports, changeSport}) => {
    const sportsList = sports.map(item => {return {key: item, label: item}});

    return (
        <Dropdown
            triggerText="Sport"
            name="sport"
            options={sportsList}
            onChange={changeSport}
        />
    )
}

import {Dropdown} from "../../../../Dropdown";

export const GamesFilter = () => {

    return (
        <Dropdown
            triggerText="Games"
            name="games"
            options={[
                {key: '1', label: "Los Angeles Dodgers @ Chicago White Sox"},
                {key: '2', label: "Boston Red Sox @ Los Angeles Angels"},
                {key: '3', label: "Boston Red Sox @ Los Angeles Angels"},
                {key: '4', label: "New Youk Yankees @ Minnesota Twins"},
                {key: '5', label: "Boston Celtics @ Golden State Warrioes"},
            ]}
        />
    )
}
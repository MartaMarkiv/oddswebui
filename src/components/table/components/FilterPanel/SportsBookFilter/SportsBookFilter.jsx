import {Dropdown} from "../../../../Dropdown";

export const SportsBookFilter = () => {
    return (
        <Dropdown
            triggerText="Sports book"
            name="sportsBook"
            options={[
                {key: '1', label: `<div>Los Angeles Dodgers @ Chicago White Sox</div>`},
                {key: '2', label: "Boston Red Sox @ Los Angeles Angels"},
                {key: '3', label: "Boston Red Sox @ Los Angeles Angels"},
                {key: '4', label: "New Youk Yankees @ Minnesota Twins"},
                {key: '5', label: "Boston Celtics @ Golden State Warrioes"}
            ]}
        />
    )
}

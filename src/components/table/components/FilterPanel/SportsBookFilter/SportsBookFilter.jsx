import {Dropdown} from "../../../../Dropdown";

export const SportsBookFilter = () => {
    return (
        <Dropdown
            triggerText="Sports book"
            name="sportsBook"
            options={[
                {key: '1', label: "Los Angeles Dodgers @ Chicago White Sox"},
                {key: '2', label: "Boston Red Sox @ Los Angeles Angels"},
                {key: '3', label: "Boston Red Sox @ Los Angeles Angels"},
                {key: '4', label: "New Youk Yankees @ Minnesota Twins"},
                {key: '5', label: "Boston Celtics @ Golden State Warrioes"},
                {key: '6', label: "Orange1"},
                {key: '7', label: "Apple2"},
                {key: '8', label: "Pear2"},
                {key: '9', label: "Orange2"},
                {key: '10', label: "Apple3"},
                {key: '11', label: "Pear3"},
                {key: '12', label: "Orange3"},
                {key: '13', label: "Apple4"},
                {key: '14', label: "Pear4"},
                {key: '15', label: "Orange4"},
                {key: '16', label: "Apple5"},
                {key: '17', label: "Pear5"},
                {key: '18', label: "Orange5"},
                {key: '19', label: "Apple6"},
                {key: '20', label: "Pear6"},
                {key: '21', label: "Orange6"},
                {key: '22', label: "Apple7"},
                {key: '23', label: "Pear7"},
                {key: '24', label: "Orange7"}
            ]}
        />
    )
}
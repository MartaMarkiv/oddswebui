export const DRAWER_WIDTH = 400;

export const TABLE_DATA = "wss://user:Oddsbender@backend.oddsbender.com/ws/table_data";
export const OPPORTUNITY= "wss://user:Oddsbender@backend.oddsbender.com/ws/opportunity_feed";

export const QUARTERS_LIST = {
    q1: ["q1", "1st"],
    q2: ["q2", "2nd"],
    q3: ["q3", "3rd"],
    q4: ["q4", "4th"],
    full: ["full"],
    other: ["other"]
};
export const FULL_QUARTERS = [QUARTERS_LIST.q1, QUARTERS_LIST.q2, QUARTERS_LIST.q3, QUARTERS_LIST.q4].flat();
export const QUARTERS_FILTERS = [
    {key: "q1", label: "First quarter"},
    {key: "q2", label: "Second quarter"},
    {key: "q3", label: "Third quarter"},
    {key: "q4", label: "Fourth quarter"},
    {key: "full", label: "Full game"},
    {key: "other", label: "Other"}
];

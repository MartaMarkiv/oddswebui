export const DRAWER_WIDTH = 400;
export const MULTI_DRAWER_WIDTH = 800;
export const TABLE_DATA = process.env.REACT_APP_TABLE_DATA;
export const OPPORTUNITY= process.env.REACT_APP_OPPORTUNITY;

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

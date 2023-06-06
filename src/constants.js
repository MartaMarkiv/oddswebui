const devConfig = {
    table_data: process.env.REACT_APP_TABLE_DATA,
    opportunity: process.env.REACT_APP_OPPORTUNITY,
    opportunity_prop: process.env.REACT_APP_OPPORTUNITY_PROP,
    opportunity_popular: process.env.REACT_APP_OPPORTUNITY_POPULAR
}
const prodConfig = {
    table_data: "wss://user:Oddsbender@oddsbender.com/api/ws/table_data",
    opportunity: "wss://user:Oddsbender@oddsbender.com/api/ws/opportunity_feed",
    opportunity_prop: "wss://user:Oddsbender@oddsbender.com/api/ws/opportunity_feed_prop",
    opportunity_popular: "wss://user:Oddsbender@oddsbender.com/api/ws/opportunity_feed_popular"
} 

export const DRAWER_WIDTH = 400;
export const MULTI_DRAWER_WIDTH = 800;
export const TABLE_DATA = process.env.NODE_ENV === "production" ? prodConfig.table_data : devConfig.table_data
export const OPPORTUNITY= process.env.NODE_ENV === "production" ? prodConfig.opportunity : devConfig.opportunity
export const OPPORTUNITY_PROP = process.env.NODE_ENV === "production" ? prodConfig.opportunity_prop : devConfig.opportunity_prop;
export const OPPORTUNITY_POPULAR = process.env.NODE_ENV === "production" ? prodConfig.opportunity_popular : devConfig.opportunity_popular;

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
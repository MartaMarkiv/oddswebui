export const sportsFilter = (data, sports) => data.filter(item => sports.indexOf(item.sport) >= 0);
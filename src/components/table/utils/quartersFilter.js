import {QUARTERS_LIST} from "../../../constants";

export const quartersFilter = (data, quarters) => {
    
    const fullBets = quarters.indexOf('full') >= 0 || quarters.indexOf('q4') >= 0;
    console.log("fullBets: ", fullBets);
    const gameQuarters = quarters.indexOf('q4') >= 0 ? QUARTERS_LIST.q4 : quarters;
    console.log("gameQuarters: ", gameQuarters);

    const tableData = data.filter((game) => {
        const filteredBets = fullBets ?
            game.betType :
            quarters.reduce(
                (prev, curr) => prev || game.betType.toLowerCase().indexOf(curr) >= 0,
                false
              );

        const isFilteredGame = gameQuarters.reduce(
            (prev, curr) => prev || game.time.toLowerCase().indexOf(curr) >= 0,
            false
          );

        if (isFilteredGame && filteredBets) {
            return game;
        } else return false;
    });

    console.log("Filtered quarters: ");
    console.log(tableData);
    return tableData;
};
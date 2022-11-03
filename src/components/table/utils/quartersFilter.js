import {FULL_QUARTERS} from "../../../constants";

export const quartersFilter = (data, quarters) => {
    
    const fullBets = quarters.indexOf('full') >= 0;
    const otherGames = quarters.indexOf('other') >= 0;
    const gameQuarters = quarters;

    let prevGameBets = 0;
    let countBetsCounter = 0;
    let prevGameName = data[0].game;

    const tableData = [];

    data.forEach((game) => {
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

        const saveGame = () => {
            if (game.game !== prevGameName) {
                prevGameBets = countBetsCounter;
                prevGameName = game.game;
            }
            countBetsCounter++;
            
            tableData.push({...game, prevGameBets: prevGameBets || 0});
        }

        if (isFilteredGame && filteredBets) {
            saveGame();
        } else if(otherGames) {
            const isQuartersGame = FULL_QUARTERS.reduce(
                (prev, curr) => prev || game.time.toLowerCase().indexOf(curr) >= 0,
                false
              );
              !isQuartersGame && saveGame();
        }
    });

    return tableData;
};
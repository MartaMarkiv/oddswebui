import {FULL_QUARTERS, QUARTERS_LIST} from "../../../constants";

export const quartersFilter = (data, quarters) => {
    
    const fullBets = quarters.indexOf('full') >= 0;
    const otherGames = quarters.indexOf('other') >= 0;

    let prevGameName = '';

    const tableData = [];

    data.forEach((game) => {
        const isFilteredGame = quarters.reduce(
            (prev, curr) => prev || QUARTERS_LIST[curr].filter(item =>
                game.time.toLowerCase().indexOf(item) >= 0).length > 0,
            false
          );

        const filteredBets = fullBets ?
            game.betType :
            quarters.reduce(
                (prev, curr) => prev || QUARTERS_LIST[curr].filter(item =>
                    game.betType.toLowerCase().indexOf(item) >= 0).length > 0,
                false
                );

        const saveGame = () => {
            let isDisplayName = false;
            if (game.game !== prevGameName) {
                prevGameName = game.game;
                isDisplayName = true;
            }
            
            tableData.push({...game, isDisplayName});
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

    return tableData.map(item => {
        const countBetsCounter = tableData.filter(elem => elem.game === item.game).length;
        return {...item, countBetTypes: countBetsCounter}
    });
};
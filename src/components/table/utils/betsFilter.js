export const betsFilter = (data, bets) => {
    let prevGameName = '';

    const tableData = [];

    data.forEach(game => {
        const saveGame = () => {
            let isDisplayName = false;
            if (game.game !== prevGameName) {
                prevGameName = game.game;
                isDisplayName = true;
            }
            
            tableData.push({...game, isDisplayName});
        }

        if (bets.indexOf(game.betType) >= 0) {
            saveGame();
        }
    });

    return tableData.map(item => {
        const countBetsCounter = tableData.filter(elem => elem.game === item.game).length;
        return {...item, countBetTypes: countBetsCounter}
    });
}
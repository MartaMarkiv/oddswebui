import camelCase from 'lodash.camelcase';

export const parseData = (sportsData, booksList) => {
  
    let prevGameName = ""; //to correct display table data if there is empty line

    const tableData = sportsData.reduce((gamesAcc, game) => {
        const betTypes = [...new Set(game.sportsbooks.flatMap(sportsbook => 
            sportsbook.bets.map(bet => bet.name)
            ))];

        betTypes.forEach(betType => {

            let countBets = 0;
            game.sportsbooks.forEach(sportsbook => {
                const currentBet = sportsbook.bets.find(bet => bet.name === betType);
                const {type = [], odds = []} = currentBet || {};
                countBets = Math.max(countBets, type[1] && odds[1] ? 2 : 1);
            });

            const gameSportsBook = {};

            booksList.forEach((bookItem, index) => {
                const {key: bookName} = bookItem;
                const sportsbook = game.sportsbooks.find(sportsBookItem => sportsBookItem.sportsbook === bookName);
                const currentBet = sportsbook ? sportsbook.bets.find(bet => bet.name === betType) : null;
                const {type = [], odds = []} = currentBet || {};

                const homeBets = [];
                countBets === 2 && homeBets.push({
                    value: type[1] ? type[1].trim() : '-',
                    status: type[1] && 'secondary',
                    key: 'home',
                    book: bookName.trim(),
                    betName: currentBet ? currentBet.name : betType,
                    game: game.game,
                    index
                });
                homeBets.push({
                    value: odds[1] ? odds[1].trim() : '-',
                    key: 'home',
                    book: bookName.trim(),
                    betName: currentBet ? currentBet.name : betType,
                    game: game.game,
                    index
                });
                
                const awayBets = [];
                countBets === 2 && awayBets.push({
                    value: type[0] ? type[0].trim() : '-',
                    status: type[0] && 'secondary',
                    key: 'away',
                    book: bookName.trim(),
                    betName: currentBet ? currentBet.name : betType,
                    game: game.game,
                    index
                });
                awayBets.push({
                    value: odds[0] ? odds[0].trim() : '-',
                    key: 'away',
                    book: bookName.trim(),
                    betName: currentBet ? currentBet.name : betType,
                    game: game.game,
                    index
                });

                gameSportsBook[bookName] = {
                    bets: {
                        home: homeBets,
                        away: awayBets
                    }
                };
            })

            gamesAcc.push({
                id: camelCase(`${game.id} - ${betType}`),
                sport: game.sport,
                game: game.game,
                type: game.type,
                time: game.time,
                timeout: game.timeout,
                betType,
                countBetTypes: betTypes.length,
                isDisplayName: game.game !== prevGameName,
                books: gameSportsBook,
            });

            prevGameName= game.game;
        })
    
        return gamesAcc;
    }, []);

    return tableData;
};
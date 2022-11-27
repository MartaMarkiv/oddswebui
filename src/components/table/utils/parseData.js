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

                const typeBets = [];
                // console.log(currentBet && currentBet.name, "    ", odds[0], "   ", odds[1]);

                const awayValue = currentBet && currentBet.name === 'Moneyline' ? 'Away' :
                    type[0] ? type[0].trim() : '-';
                typeBets.push({
                    value: awayValue,//type[0] ? type[0].trim() : '-',
                    status: 'secondary',
                    key: 'type',
                    book: bookName.trim(),
                    betName: currentBet ? currentBet.name : betType,
                    game: game.game,
                    index
                });
                const homeValue = currentBet && currentBet.name === 'Moneyline' ? 'Home' :
                    type[1] ? type[1].trim() : '-';
                typeBets.push({
                    value: homeValue, //type[1] ? type[1].trim() : '-',
                    status: 'secondary',
                    key: 'type',
                    book: bookName.trim(),
                    betName: currentBet ? currentBet.name : betType,
                    game: game.game,
                    index
                });
                
                const oddsBets = [];
                oddsBets.push({
                    value: odds[0] ? odds[0].trim() : '-',
                    key: 'odds',
                    book: bookName.trim(),
                    betName: currentBet ? currentBet.name : betType,
                    game: game.game,
                    index
                });
                oddsBets.push({
                    value: odds[1] ? odds[1].trim() : '-',
                    key: 'odds',
                    book: bookName.trim(),
                    betName: currentBet ? currentBet.name : betType,
                    game: game.game,
                    index
                });

                gameSportsBook[bookName] = {
                    bets: {
                        type: typeBets,
                        odds: oddsBets
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
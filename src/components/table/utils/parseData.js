import {v4 as uuidv4} from 'uuid';

export const parseData = (data) => {
    if (!data.length) {
        return false;
    }
    const sportsData = data[0].games;
  
    const mockData = sportsData.reduce((gamesAcc, game) => {
        const betTypes = [...new Set(game.sportsbooks.flatMap(sportsbook => {
            const betsList = [];
            sportsbook.forEach((book, index) => {
                betsList.push(...(book.bets.map(bet => bet.name)));
            });
            return betsList;
        }))];

        betTypes.forEach((betType, index) => {
            gamesAcc.push({
                id: `${uuidv4()}${((index+1) % betTypes.length) === 1 ? '|first' : ''}`,
                game: game.game,
                type: game.type,
                time: game.time,
                timeout: game.timeout,
                betType,
                books: game.sportsbooks.reduce((sportsbookAcc, sportsbook) => {
                    let currentBet1 = {};
                    let currentSportBook = {};
                    sportsbook.forEach(sportBookItem => {
                        currentBet1 = sportBookItem.bets.find(bet => bet.name === betType);
                        if (currentBet1) {
                            currentSportBook = sportBookItem;
                            return;
                        }
                    });
                    const currentBet = sportsbook[0].bets.find(bet => bet.name === betType);
                    if (currentBet1) {
                        const homeBets = [];
                        currentBet.type[1] && homeBets.push({value: currentBet.type[1], status: 'secondary'});
                        currentBet.odds[1] && homeBets.push({value: currentBet.odds[1]});
                        
                        const awayBets = [];
                        currentBet.type[0] && awayBets.push({value: currentBet.type[0], status: 'secondary'});
                        currentBet.odds[0] && awayBets.push({value: currentBet.odds[0]});

                        sportsbookAcc[currentSportBook.sportsbook] = {
                            bets: {
                                home: homeBets,
                                away: awayBets
                            }
                        }
                    }
                    return sportsbookAcc;
                }, {})
            })
        })
    
        return gamesAcc;
    }, []);

    return mockData;
};
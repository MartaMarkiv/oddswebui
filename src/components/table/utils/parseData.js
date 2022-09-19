import {v4 as uuidv4} from 'uuid';

export const parseData = (data) => {
    // console.log("Parse data");
    // console.log(data);
    const sportsData = data[0].games;
  
    const mockData = sportsData.reduce((gamesAcc, game) => {
        // console.log(game);
        const betTypes = [...new Set(game.sportsbooks.flatMap(sportsbook => {
            // console.log("sportsbook");
            // console.log(sportsbook);
            const betsList = [];
            sportsbook.forEach((book, index) => {
                betsList.push(...(book.bets.map(bet => bet.name)));
            });
            return betsList;
            // return sportsbook.bets.map(bet => bet.name)
        }))];

        // console.log("betTypes: ");
        // console.log(betTypes);
    
        betTypes.forEach((betType, index) => {
            gamesAcc.push({
                id: `${uuidv4()}${((index+1) % betTypes.length) === 1 ? '|first' : ''}`,
                game: game.game,
                type: game.type,
                time: game.time,
                timeout: game.timeout,
                betType,
                books: game.sportsbooks.reduce((sportsbookAcc, sportsbook) => {
                    // console.log("sportsbook ",sportsbook.length);
                    // console.log(sportsbook);
                    // console.log("bet type: ", betType);
                    let currentBet1 = {};
                    let currentSportBook = {};
                    sportsbook.forEach(sportBookItem => {
                        // console.log(sportBookItem.bets);
                        currentBet1 = sportBookItem.bets.find(bet => bet.name === betType);
                        if (currentBet1) {
                            currentSportBook = sportBookItem;
                            return;
                        }
                    });
                    // console.log("currentBetFirst");
                    // console.log(currentBet1);
                    // console.log('currentSportBook');
                    // console.log(currentSportBook);
                    const currentBet = sportsbook[0].bets.find(bet => bet.name === betType);
                    if (currentBet1) {
                        // console.log('currentSportBook.sportsbook');
                        // console.log(currentSportBook.sportsbook);
                        sportsbookAcc[currentSportBook.sportsbook] = {
                            bets: {
                                home: [
                                    ...(currentBet.type[1] && [{value: currentBet.type[1], status: 'secondary'}]),
                                    ...(currentBet.odds[1] && [{value: currentBet.odds[1]}]),
                                ],
                                away: [
                                    ...(currentBet.type[0] && [{value: currentBet.type[0], status: 'secondary'}]),
                                    ...(currentBet.odds[0] && [{value: currentBet.odds[0]}]),
                                ]
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
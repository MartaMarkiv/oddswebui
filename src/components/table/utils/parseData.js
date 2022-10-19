export const parseData = (data) => {
    if (!data.length) {
        return false;
    }
    const sportsData = data[0].games;

    const sportsBooksList = new Set();
  
    const tableData = sportsData.reduce((gamesAcc, game) => {
        const betTypes = [...new Set(game.sportsbooks.flatMap(sportsbook => 
            sportsbook.bets.map(bet => bet.name)
            ))];

        betTypes.forEach((betType, index) => {
            gamesAcc.push({
                id: `${game.id} - ${betType}`,
                game: game.game,
                type: game.type,
                time: game.time,
                timeout: game.timeout,
                betType,
                books: game.sportsbooks.reduce((sportsbookAcc, sportsbook) => {
                    const {sportsbook: book} = sportsbook;
                    sportsBooksList.add(sportsbook.sportsbook);
                    const currentBet = sportsbook.bets.find(bet => bet.name === betType);
                    if (currentBet) {
                        const homeBets = [];
                        currentBet.type[1] && homeBets.push({
                            value: currentBet.type[1].trim(),
                            status: 'secondary',
                            key: 'home',
                            book: book.trim(),
                            betName: currentBet.name,
                            game: game.game
                        });
                        currentBet.odds[1] && homeBets.push({
                            value: currentBet.odds[1].trim(),
                            key: 'home',
                            book: book.trim(),
                            betName: currentBet.name,
                            game: game.game
                        });
                        
                        const awayBets = [];
                        currentBet.type[0] && awayBets.push({
                            value: currentBet.type[0].trim(),
                            status: 'secondary',
                            key: 'away',
                            book: book.trim(),
                            betName: currentBet.name,
                            game: game.game
                        });
                        currentBet.odds[0] && awayBets.push({
                            value: currentBet.odds[0].trim(),
                            key: 'away',
                            book: book.trim(),
                            betName: currentBet.name,
                            game: game.game
                        });

                        sportsbookAcc[sportsbook.sportsbook] = {
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

    return {
        tableData,
        books: Array.from(sportsBooksList)
    };
};
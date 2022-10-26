export const parseData = (sportsData) => {
  
    let prevGameBetsCount = 0; //to correct display table data if there is empty line

    const tableData = sportsData.reduce((gamesAcc, game, gameIndex) => {
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
                countBetTypes: betTypes.length,
                prevGameBets: prevGameBetsCount || betTypes.length,
                gameIndex,
                books: game.sportsbooks.reduce((sportsbookAcc, sportsbook, index) => {
                    const {sportsbook: book} = sportsbook;
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
    
        prevGameBetsCount += betTypes.length;
        
        return gamesAcc;
    }, []);

    return tableData;
};
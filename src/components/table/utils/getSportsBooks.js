export const getSportsBooks = (sportsData) => {
    
    const sportsBooksList = new Set();
    const betsTypesList = new Set();
    const games = [];
  
    sportsData.forEach(game => {
        games.push({ key: game.game, label: game.game});
        game.sportsbooks?.forEach(sportsbook => {
            sportsBooksList.add(sportsbook.sportsbook);
            sportsbook.bets.forEach(betType => betsTypesList.add(betType.name));
        });
    });

    return {
        books: Array.from(sportsBooksList).map((item) => {return { key: item, label: item};}), //temporarily key
        bets: Array.from(betsTypesList).map((item) => {return { key: item, label: item};}),
        games
    };
};
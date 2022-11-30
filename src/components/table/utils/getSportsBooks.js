export const getSportsBooks = (sportsData) => {
    
    const sportsBooksList = new Set();
    const games = [];
  
    sportsData.map(game => {
        games.push({ key: game.game, label: game.game});
        game.sportsbooks.map(sportsbook => {
            sportsBooksList.add(sportsbook.sportsbook);
        });
    });

    return {
        books: Array.from(sportsBooksList).map((item) => {return { key: item, label: item};}), //temporarily key
        games
    };
};
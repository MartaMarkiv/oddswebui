export const getSportsBooks = (sportsData) => {
    
    const sportsBooksList = new Set();
  
    sportsData.map(game => {
        game.sportsbooks.map(sportsbook => {
            sportsBooksList.add(sportsbook.sportsbook);
        });
    });

    return Array.from(sportsBooksList).map((item) => {return { key: item, label: item};}) //temporarily key
};
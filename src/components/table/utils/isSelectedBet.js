export const isSelectedBet = (selected, bet) => {
    const betId = `${bet.game} - ${bet.betName}`
    const isSelectedGame = selected && selected.id === betId;
    if (isSelectedGame) {
        const betInfo = selected[bet.key];
        const isSelectedBet = betInfo.book === bet.book && betInfo.betName === bet.betName && betInfo.value === bet.value;
        return isSelectedBet;
    }
    return false;
    
};
import camelCase from 'lodash.camelcase';

export const isSelectedBet = (selected, bet) => {
    const betId = camelCase(`${bet.game} - ${bet.betName}`);
    const isSelectedGame = selected && selected.id === betId;
    if (isSelectedGame) {
        const betInfo = selected[bet.type];
        const isSelectedBet = betInfo.book === bet.book && betInfo.betName === bet.betName && betInfo.value === bet.value;
        return isSelectedBet;
    }
    return false;
    
};
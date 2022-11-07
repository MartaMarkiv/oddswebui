import camelCase from 'lodash.camelcase';

export const compareBets = (list, bet) => {
    const betId = `${bet.game} - ${bet.betName}`
    const gameInfo = list.find(gameItem => gameItem.id === betId);
    if (gameInfo) {
        const betKey = camelCase(bet.betName);
        const opportunityInfo = gameInfo.opportunity[betKey];
        const opportunityItem = opportunityInfo ?
        opportunityInfo.items.find(item => 
            item.value === bet.value &&
            item.sportBook === bet.book &&
            item.type.toLowerCase() === bet.key
        ) : false;

        return !!opportunityItem;
    }
    return false;
    
};
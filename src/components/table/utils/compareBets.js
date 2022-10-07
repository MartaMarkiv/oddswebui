import camelCase from 'lodash.camelcase';

export const compareBets = (list, bet) => {
    const gameInfo = list.find(gameItem => gameItem.id === bet.game);
    if (gameInfo) {
        const betKey = camelCase(bet.betName);
        const opportunityInfo = gameInfo.opportunities[betKey];
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
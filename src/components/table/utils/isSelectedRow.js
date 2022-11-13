import camelCase from 'lodash.camelcase';

export const isSelectedRow = (selected, bet) => {
    const betId = camelCase(`${bet.game} - ${bet.betName}`);
    return selected && selected.id === betId;
};
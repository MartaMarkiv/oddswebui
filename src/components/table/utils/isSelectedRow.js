export const isSelectedRow = (selected, bet) => {
    const betId = `${bet.game} - ${bet.betName}`
    return selected && selected.id === betId;
};
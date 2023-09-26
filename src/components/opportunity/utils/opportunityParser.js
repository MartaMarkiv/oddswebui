import camelCase from 'lodash.camelcase';
import {v4 as uuidv4} from 'uuid';

export const parser = data => {
    const collection = [];
    (data || []).forEach(({id, game, timeout, type, opportunity: _opportunity, time: gameTime}) => {
        const [awayTeam, homeTeam] = game.indexOf('@') >= 0 ? game.split(' @ ') : game.split(' v '); // Away @ Home
        const gameBets = [...new Set(_opportunity.map(item => item.bets.name))];

        for (const key of gameBets) {
            let sumProbability = 0;
            const opps = _opportunity.filter(item => item.bets.name === key).map(( {bets} ) => {
                sumProbability = bets.sum_probability;
                return {
                    id: uuidv4(),
                    value: bets.odds,
                    betName: bets.BET_NAME.trim(),
                    name: bets.name,
                    sportBook: bets.sportsbooks.trim(),
                    typeValue: bets.type,
                    probability: bets.probability,
                }
            });
            collection.push({
                id: camelCase(`${id} - ${key}`),
                homeTeam,
                awayTeam,
                timeout: !!(+timeout),
                type,
                opportunity: opps,
                sumProbability,
                gameTime
            })
        }
    });

    return collection.sort((a, b) => b.sumProbability - a.sumProbability)
        .slice(0, 10);
}
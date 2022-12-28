import camelCase from 'lodash.camelcase';
import {v4 as uuidv4} from 'uuid';

export const parser = data => {
    const collection = [];
    data?.forEach(({id, game, timeout, type, opportunity, time: gameTime}) => {
        const [awayTeam, homeTeam] = game.indexOf('@') >= 0 ? game.split(' @ ') : game.split(' v '); // Away @ Home

        opportunity.forEach(opportunityItem => {
            const {bets} = opportunityItem;
            const sumProbability = Number(bets.sum_probability);
            const [away, home] = bets.odds.map(item => item.trim());
            const [sportsBookAway, sportsBookHome] = bets.sportsbooks.map(item => item.trim());
            const [typeAway, typeHome] = bets.type;
            const [probabilityAway, probabilityHome] = bets.probability;

            const key = camelCase(bets.name);
            
            let opportunity = {};
            opportunity[key] = {
                id: camelCase(`${game} - ${bets.name}`),
                items: [],
            }

            home && opportunity[key].items.push({
                id: uuidv4(),
                value: home,
                betName: bets.BET_NAME.trim(),
                name: bets.name,
                type: 'Home',
                sportBook: sportsBookHome,
                typeValue: typeHome,
                probability: probabilityHome,
                key
            });

            away && opportunity[key].items.push({
                id: uuidv4(),
                value: away,
                betName: bets.BET_NAME.trim(),
                name: bets.name,
                type: 'Away',
                sportBook: sportsBookAway,
                typeValue: typeAway,
                probability: probabilityAway,
                key
            });

            collection.push({
                id: camelCase(`${id} - ${bets.name}`),
                homeTeam,
                awayTeam,
                timeout: !!(+timeout),
                type,
                opportunity,
                sumProbability,
                gameTime
            });
        });
    });
    return collection.sort((a, b) => b.sumProbability - a.sumProbability)
        .slice(0, 10);
}
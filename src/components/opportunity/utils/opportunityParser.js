import camelCase from 'lodash.camelcase';
import {v4 as uuidv4} from 'uuid';

export const parser = data => {
    return data.map(({id, game, timeout, type, opportunity}) => {
        const [awayTeam, homeTeam] = game.split('@'); // Away @ Home

        const opportunities = opportunity.reduce((acc, {bets}) => {
            const [away, home] = bets.odds.map(item => item.trim());
            const [sportsBookAway, sportsBookHome] = bets.sportsbooks.map(item => item.trim());
            const [typeAway, typeHome] = bets.type;
            const [probabilityAway, probabilityHome] = bets.probability;

            const key = camelCase(bets.name);

            if(!acc[key]) {
                acc[key] = {
                    id: `${game} - ${bets.name}`,
                    items: []
                }
            }

            home && acc[key].items.push({
                id: uuidv4(),
                value: home,
                name: bets.name,
                type: 'Home',
                sportBook: sportsBookHome,
                typeValue: typeHome,
                probability: probabilityHome,
                sumProbability: bets.sumProbability,
                key
            });

            away && acc[key].items.push({
                id: uuidv4(),
                value: away,
                name: bets.name,
                type: 'Away',
                sportBook: sportsBookAway,
                typeValue: typeAway,
                probability: probabilityAway,
                sumProbability: bets.sumProbability,
                key
            });

            return acc;
        }, {});

        return {
            id,
            homeTeam,
            awayTeam,
            timeout: !!(+timeout),
            type,
            opportunities,
        }
    })
}
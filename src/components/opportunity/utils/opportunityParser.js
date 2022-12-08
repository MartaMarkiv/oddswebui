import camelCase from 'lodash.camelcase';
import {v4 as uuidv4} from 'uuid';

export const parser = data => {
    const collection = [];
    data?.forEach(({id, game, timeout, type, opportunity}) => {
        const [awayTeam, homeTeam] = game.indexOf('@') >= 0 ? game.split('@') : game.split(' v '); // Away @ Home

        opportunity.forEach(opportunityItem => {
            const {bets} = opportunityItem;
            const sumProbability = Number(bets.sum_probability);
            const [away, home] = bets.odds.map(item => item.trim());
            const [awayProp, homeProp] = bets.is_prop.map(item => Number(item) === 1);
            const [sportsBookAway, sportsBookHome] = bets.sportsbooks.map(item => item.trim());
            const [typeAway, typeHome] = bets.type;
            const [probabilityAway, probabilityHome] = bets.probability;

            const key = camelCase(bets.name);
            
            let opportunity = {};
            opportunity[key] = {
                id: camelCase(`${game} - ${bets.name}`),
                items: [],
                sumProbability: sumProbability,
            }

            home && opportunity[key].items.push({
                id: uuidv4(),
                value: home,
                isProp: homeProp,
                name: bets.name,
                type: 'Home',
                sportBook: sportsBookHome,
                typeValue: typeHome,
                probability: probabilityHome,
                sumProbability: sumProbability,
                key
            });

            away && opportunity[key].items.push({
                id: uuidv4(),
                value: away,
                isProp: awayProp,
                name: bets.name,
                type: 'Away',
                sportBook: sportsBookAway,
                typeValue: typeAway,
                probability: probabilityAway,
                sumProbability: sumProbability,
                key
            });

            collection.push({
                id: camelCase(`${id} - ${bets.name}`),
                homeTeam,
                awayTeam,
                timeout: !!(+timeout),
                type,
                opportunity,
            });
        });
    });
    return collection.sort((a, b) => {
        const betKeyA = Object.keys(a.opportunity);
        const betKeyB = Object.keys(b.opportunity);
        const sumProbabilityA = Number(a.opportunity[betKeyA[0]].sumProbability);
        const sumProbabilityB = Number(b.opportunity[betKeyB[0]].sumProbability);
        return sumProbabilityB - sumProbabilityA;
    }).slice(0, 10);
}
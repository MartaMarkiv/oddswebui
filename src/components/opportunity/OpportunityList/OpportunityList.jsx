import {useEffect, useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import {List, ListItem, OpportunityListContainer} from "./styles";
import {PendingScreen} from "../../PendingScreen";
import {OpportunityItem} from "../OpportunityItem";
import {parser} from "../utils";
import camelCase from 'lodash.camelcase';

const serverData = [{
    "sport": "basketball",
    "games": [{
        "id": "21234",
        "game": "Los @ Chicago",
        "type": "Live",
        "timeout": "0",
        "opportunity": [{
            "bets": {
                "name": "Moneyline",
                "type": ["", ""],
                "odds": ["+350", "-355"],
                "sportsbooks": ["Fanduel", "Draftkings"],
                "probability": ["1.960784", "93.548387"],
                "sum_probability": "95.509171"
            }
        },
            {
                "bets": {
                    "name": "Spread - Arbitrage",
                    "type": ["+1.5", "-1.5"],
                    "odds": ["-300", "+350"],
                    "sportsbooks": ["Barstool", "Betmgm"],
                    "probability": ["2.960784", "94.548387"],
                    "sum_probability": "97.509171"
                }
            },
            {
                "bets": {
                    "name": "Test",
                    "type": ["+1.5", "-1.5"],
                    "odds": ["-300", "+350"],
                    "sportsbooks": ["Barstool", "Betmgm"],
                    "probability": ["2.960784", "94.548387"],
                    "sum_probability": "97.509171"
                }
            }
        ]
    },
        {
            "id": "21235",
            "game": "Lakers @ Bulls",
            "type": "Live",
            "timeout": "1",
            "opportunity": [{
                "bets": {
                    "name": "1t Half Totalpoints",
                    "type": ["O154.5", "U153.1"],
                    "odds": ["300", "-450"],
                    "sportsbooks": ["Barstool", "Caesars"],
                    "probability": ["1.960784", "93.548387"],
                    "sum_probability": "95.509171"
                }
            }]
        }
    ]
}];

const opportunityMapper = data => {
    return data.map(({id, game, timeout, type, opportunity}) => {
        const [awayTeam, homeTeam] = game.split('@'); // Away @ Home

        const opportunities = opportunity.reduce((acc, {bets}) => {
            const [away, home] = bets.odds;
            const [sportsBookAway, sportsBookHome] = bets.sportsbooks;
            const [typeAway, typeHome] = bets.type;
            const [probabilityAway, probabilityHome] = bets.probability;

            const key = camelCase(bets.name);

            if(!acc[key]) {
                acc[key] = {
                    id: uuidv4(),
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

const dataMock = opportunityMapper(serverData[0].games);

export const OpportunityList = ({
    opportunities,
    selectOpportunity,
    selectedOpportunity
}) => {

    return <OpportunityListContainer>
        <List>
            {
                opportunities && opportunities.map((item) => {
                    return <ListItem key={item.id}>
                        <OpportunityItem
                            data={item}
                            selected={selectedOpportunity ? selectedOpportunity.id : null}
                            onSelect={selectOpportunity}
                        />
                    </ListItem>
                })
            }
        </List>
    </OpportunityListContainer>
}
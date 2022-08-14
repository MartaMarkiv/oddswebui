import styled from "styled-components";
import {useEffect, useState} from "react";
import {PendingScreen} from "../PendingScreen";
import {OpportunityItem} from "./OpportunityItem";
import { v4 as uuidv4 } from 'uuid';

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

            home && acc.push({
                id: uuidv4(),
                value: home,
                name: bets.name,
                type: 'Home',
                sportBook: sportsBookHome,
                typeValue: typeHome,
                probability: probabilityHome,
                sumProbability: bets.sumProbability
            });

            away && acc.push({
                id: uuidv4(),
                value: away,
                name: bets.name,
                type: 'Away',
                sportBook: sportsBookAway,
                typeValue: typeAway,
                probability: probabilityAway,
                sumProbability: bets.sumProbability
            });

            return acc;
        }, []);

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

const OpportunityListContainer = styled.div``;
const List = styled.ul`
  padding: 0;
  list-style: none;
`;
const ListItem = styled.li`
  display: block;
  margin-bottom: 12px;  
`;

export const OpportunityList = () => {
    const [data, setData] = useState([]);
    const [pending, setPending] = useState(false);

    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        console.log('Select: ', selectedItem);
        if(selectedItem) {
            console.log('Select: ', selectedItem);
        }
    }, [selectedItem]);


    const loadData = async () => {
        setPending(true);
        const res = await new Promise((resolve) => {
            setTimeout(() => {
                resolve(dataMock)
                setPending(false);
            }, 200)
        });

        setData(res)
    }

    useEffect(() => {
        loadData();
    }, [])

    return <OpportunityListContainer>
        {
            pending && <PendingScreen position="absolute" />
        }
        <List>
            {
                data?.map(item => {
                    return <ListItem key={item.id}>
                        <OpportunityItem data={item} selected={selectedItem} onSelect={setSelectedItem} />
                    </ListItem>
                })
            }
        </List>
    </OpportunityListContainer>
}
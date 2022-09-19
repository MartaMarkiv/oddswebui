import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { w3cwebsocket as WebSocket } from "websocket";
import {BettingTable} from "../components/table";
import {tableDataMapper, parseData} from "../components/table/utils";
import {v4 as uuidv4} from 'uuid';
import {PendingScreen} from "../components/PendingScreen";
import {Title} from "../components/typography/Title/Title";

const socketUrl = "ws://localhost:8000/ws/football/table_data";
// const socketUrl = "ws://localhost:8000/ws/basketball/opportunity_feed";

const client = new WebSocket(socketUrl);

const serverData = [{
    "sport": "basketball",
    "games": [
        {
            "id": "34234",
            "game": "Alka @ NJ",
            "type": "Live",
            "time": "11:11",
            "timeout": "0",
            "sportsbooks": [{
                "sportsbook": "Faduel",
                "url": "https://...",
                "bets": [
                    {
                        "name": "Moneyline",
                        "type": ["", ""],
                        "odds": ["300", "-350"]
                    },
                    {
                        "name": "Spread - Arbitrage",
                        "type": ["+6.5", "-6.5"],
                        "odds": ["100", "-150"]
                    },
                    {
                        "name": "2nd Half Total",
                        "type": ["O71.5", "U75.1"],
                        "odds": ["100", "-150"]
                    }
                ]
            },
                {
                    "sportsbook": "Draftkings",
                    "url": "https://...",
                    "bets": [
                        {
                            "name": "Moneyline",
                            "type": ["", ""],
                            "odds": ["300", "-350"]
                        },
                        {
                            "name": "Spread - Arbitrage",
                            "type": ["+6.5", "-6.5"],
                            "odds": ["100", "-150"]
                        },
                        {
                            "name": "2nd Half Total",
                            "type": ["O71.5", "U75.1"],
                            "odds": ["100", "-150"]
                        }
                    ]
                }
            ]
        },

        {
            "id": "34234",
            "game": "Golden Warriors @ Lakers",
            "type": "Live",
            "time": "10:57",
            "timeout": "1",
            "sportsbooks": [{
                "sportsbook": "Faduel",
                "url": "https://...",
                "bets": [{
                    "name": "Moneyline",
                    "type": ["", ""],
                    "odds": ["300", "-350"]
                },
                    {
                        "name": "Spread - Arbitrage",
                        "type": ["+6.5", "-6.5"],
                        "odds": ["100", "-150"]
                    },
                    {
                        "name": "2nd Half Total",
                        "type": ["O71.5", "U75.1"],
                        "odds": ["100", "-150"]
                    }
                ]
            }, {
                "sportsbook": "Draftkings",
                "url": "https://...",
                "bets": [{
                    "name": "Moneyline",
                    "type": ["", ""],
                    "odds": ["300", "-350"]
                },
                    {
                        "name": "Spread - Arbitrage",
                        "type": ["+6.5", "-6.5"],
                        "odds": ["100", "-150"]
                    },
                    {
                        "name": "2nd Half Total",
                        "type": ["O71.5", "U75.1"],
                        "odds": ["100", "-150"]
                    }
                ]
            }]
        },
    ]
}];

console.log(serverData[0].games);

const mockData = serverData[0].games.reduce((gamesAcc, game) => {
    const betTypes = [...new Set(game.sportsbooks.flatMap(sportsbook => {
        return sportsbook.bets.map(bet => bet.name)
    }))];

    // console.log("bet types mocked");
    // console.log(betTypes);
    betTypes.forEach((betType, index) => {
        gamesAcc.push({
            id: `${uuidv4()}${((index+1) % betTypes.length) === 1 ? '|first' : ''}`,
            game: game.game,
            type: game.type,
            time: game.time,
            timeout: game.timeout,
            betType,
            books: game.sportsbooks.reduce((sportsbookAcc, sportsbook) => {
                // console.log("sportsbook mocked");
                // console.log(sportsbook);
                const currentBet = sportsbook.bets.find(bet => bet.name === betType);
                // console.log("currentBet mocked");
                // console.log(currentBet);
                sportsbookAcc[sportsbook.sportsbook] = {
                    bets: {
                        home: [
                            ...(currentBet.type[1] && [{value: currentBet.type[1], status: 'secondary'}]),
                            ...(currentBet.odds[1] && [{value: currentBet.odds[1]}]),
                        ],
                        away: [
                            ...(currentBet.type[0] && [{value: currentBet.type[0], status: 'secondary'}]),
                            ...(currentBet.odds[0] && [{value: currentBet.odds[0]}]),
                        ]
                    }
                }

                return sportsbookAcc;
            }, {})
        })
    })

    return gamesAcc;
}, []);


console.log('mocked data');
console.log(mockData);

const mockData1 = [
    {
        id: uuidv4(),
        game: 'Game 1',
        betType: 'Moneyline',
        books: {
            fanduel: {
                bets: {
                    home: [{value: 100, status: 'success'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            barstool: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            draftkings: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            caesars: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            matchbook: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            }
        }
    },
    {
        id: uuidv4(),
        game: 'Game 1',
        betType: 'Spread - Atbitrage',
        books: {
            fanduel: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            barstool: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            draftkings: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            caesars: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            matchbook: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            }
        }
    },
    {
        id: uuidv4(),
        game: 'Game 1',
        betType: 'Total - Atbitrage',
        books: {
            fanduel: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            barstool: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            draftkings: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            caesars: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            matchbook: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            }
        }
    },
    {
        id: uuidv4(),
        game: 'Game 1',
        betType: 'Total - Middle',
        books: {
            fanduel: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            barstool: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            draftkings: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            caesars: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            matchbook: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            }
        }
    },
    {
        id: uuidv4(),
        game: 'Game 2',
        betType: 'Moneyline',
        books: {
            fanduel: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            barstool: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            draftkings: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            caesars: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            matchbook: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            }
        }
    },
    {
        id: uuidv4(),
        game: 'Game 2',
        betType: 'Spread - Atbitrage',
        books: {
            fanduel: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            barstool: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            draftkings: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            caesars: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            matchbook: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            }
        }
    },
    {
        id: uuidv4(),
        game: 'Game 2',
        betType: 'Total - Atbitrage',
        books: {
            fanduel: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            barstool: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            draftkings: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            caesars: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            matchbook: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            }
        }
    },
    {
        id: uuidv4(),
        game: 'Game 2',
        betType: 'Total - Middle',
        books: {
            fanduel: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            barstool: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'secondary'}, {value: 490}]
                }
            },
            draftkings: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            caesars: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            },
            matchbook: {
                bets: {
                    home: [{value: 100, status: 'secondary'}, {value: 200}],
                    away: [{value: 300, status: 'success'}, {value: 490}]
                }
            }
        }
    },
]

const StyledMain = styled.div`
  position: relative;
`;

export const Main = () => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [fetched, setFetched] = useState(false);

    const loadData = async () => {
        setPending(true);

        return new Promise(() => {
            setTimeout(() => {
                setData(tableDataMapper(mockData));
                setPending(false);
                setFetched(true);
            }, 300);
        })
    }

    const loadDataFromApi = async () => {
        setPending(true);
        client.onopen = () => {};

        client.onmessage = (event) => {
            const json = JSON.parse(event.data);
            console.log(`Data received from server:`);
            console.log(json[0].games);
            const collection = parseData(json);
            console.log("collection:");
            console.log(collection);
            setData(collection);
            setPending(false);
            setFetched(true);
        };

        client.onerror = () => {
            console.log("on error");
        };
    }

    // useEffect(() => {
    //     loadData();
    // }, []);

    useEffect(() => {
        loadDataFromApi();
    }, []);

    return <StyledMain>
        {pending
            ? <PendingScreen/>
            : <>
                <Title>Betting table</Title>
                <BettingTable data={data}/>
            </>}
    </StyledMain>

}
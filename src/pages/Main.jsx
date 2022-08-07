import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {BettingTable} from "../components/table";
import {tableDataMapper} from "../components/table/utils";
import { v4 as uuidv4 } from 'uuid';
import {PendingScreen} from "../components/PendingScreen";

const mockData = [
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

    const loadData = () => {
        setPending(true);

        return new Promise(() => {
            setTimeout(() => {
                setData(tableDataMapper(mockData));
                setPending(false);
                setFetched(true);
            }, 3000);
        })
    }

    useEffect(() => {
        loadData();
    }, []);

    return <StyledMain>
        {pending && <PendingScreen />}
        <BettingTable data={data} />
    </StyledMain>

}
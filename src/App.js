import {Main} from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import styled from "styled-components";
import {light, dark} from "./Theme.styled";
import {ThemeProvider} from "styled-components";
import {createContext, useEffect, useState} from "react";
import {CommonProvider} from "./shared/context/CommonProvider";
import {QueryParamProvider} from 'use-query-params';
import {ReactRouter6Adapter} from 'use-query-params/adapters/react-router-6';
import {TABLE_DATA} from "./constants";
import {parseData, getSportsBooks} from "./components/table/utils";

const client = new WebSocket(TABLE_DATA);

const AppStyled = styled.div`
  padding: 0 40px;
  background: ${({theme}) => theme.colors.bgBody};
  color: ${({theme}) => theme.colors.textPrimary};
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const AppBody = styled.div`
  flex: 1 0 auto;
`;

const AppFooter = styled.div`
  flex: 0 0 auto;
`;

const themesMap = {
    light,
    dark
}

export const ThemePreferenceContext = createContext();

function App() {
    const initialTheme = localStorage.getItem('theme') || 'light';
    const [currentTheme, setCurrentTheme] = useState(initialTheme);

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [dataLength, setDataLength] = useState(15);

    const [sportsBooks, setSportsBooks] = useState(null);
    const [sportsTypes, setSportsTypes] = useState([]);
    const [selectedKey, setSelectedKey] = useState(null);
    const [opportunities, setOpportunities] = useState(null);
    const [betsTypes, setBetsTypes] = useState([]);
    const [games, setGames] = useState([]);


    const [throttleTimer, setThrottleTimer] = useState(false);

    const theme = themesMap[currentTheme];

 
    const loadDataFromApi = () => {
        setPending(true);

        client.onmessage = (event) => {
            const json = JSON.parse(event.data);
            console.log(json);
            
            if (!json || !json.length) {
                setData(null);
                setPending(false);
                return;
            }

            const sportsList = [];
            const allGames = json.map(sports => {
                sportsList.push(sports.sport);
                return sports.games.map(gameItem => {
                    return {...gameItem, sport: sports.sport};
                });
            }).flat();
            const {books: booksList, bets, games} = getSportsBooks(allGames);

            const tableData = parseData(allGames, booksList);

            console.log("parsed data: ", tableData.length);
            setData(tableData);
            setSportsTypes(sportsList);
            setSportsBooks(booksList);
            setPending(false);
            setBetsTypes(bets);
            setGames(games);
        };

        client.onerror = () => {
            console.log("Socket connection error");
        };
    }

    

    const handleInfiniteScroll = () => {
        const throttle = (callback, time) => {
            console.log("throttleTimer: ", throttleTimer);
            if (throttleTimer) return;
            setThrottleTimer(true);
            
            setTimeout(() => {
                callback();
                setThrottleTimer(false);
            }, time);
        };

        throttle(() => {
            const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 40;
    
            if (endOfPage) {
                console.log("loadMoreData ", dataLength);
                setDataLength(dataLength + 2);
            }
            setThrottleTimer(false);
        }, 1000);
      };

    useEffect(() => {
        loadDataFromApi();
    }, []);

    useEffect(() => {
        if (localStorage.getItem('theme') !== currentTheme) {
            localStorage.setItem('theme', currentTheme);
        }
    }, [currentTheme]);

    // useEffect(() => {
    //     window.addEventListener("scroll", handleInfiniteScroll, { passive: true });
    //     return () => window.removeEventListener("scroll", handleInfiniteScroll);
    // }, [dataLength]);

    const changeSelectedKey = value => {
        setSelectedKey(value);
        if (value && data) {
            const indexTableData =  data.map(e => e.id).indexOf(value.id);
            if (indexTableData > dataLength) {
                setDataLength(indexTableData + 2);
                setTimeout(() => handleScroll(value), 500);
            } else {
                handleScroll(value);
            }
        }
    }

    const handleScroll = (value) => {
        const element = document.querySelector(`.${value.id}`);
        element.scrollIntoView({behavior: 'smooth', block: 'center'});
    }

    const tableData = data ? data.slice(0, dataLength) : [];

    console.log(" ----- tableData --------- ", tableData ? tableData.length : 0, " ------------- ", dataLength);
    return (
        <ThemePreferenceContext.Provider value={{currentTheme, setCurrentTheme}}>
            <ThemeProvider theme={theme}>
                <CommonProvider>
                    <AppStyled>
                        <Header
                            changeSelectedKey={changeSelectedKey}
                            selectedKey={selectedKey}
                            opportunities={opportunities}
                            setOpportunities={setOpportunities}
                        />
                        <AppBody>
                            <QueryParamProvider adapter={ReactRouter6Adapter}>
                                <Routes>
                                    <Route path="/" element=
                                    {
                                        <Main
                                            opportunities={opportunities}
                                            selectedKey={selectedKey}
                                            dataLength={data ? data.length : 0}
                                            sportsBooks={sportsBooks}
                                            sportsTypes={sportsTypes}
                                            pending={pending}
                                            loadMoreData={()=>{}}
                                            tableData={tableData}
                                            betsTypes={betsTypes}
                                            games={games}
                                        />
                                    }/>
                                </Routes>
                            </QueryParamProvider>
                        </AppBody>
                        <AppFooter/>
                    </AppStyled>
                </CommonProvider>
            </ThemeProvider>
        </ThemePreferenceContext.Provider>
    );
}

export default App;

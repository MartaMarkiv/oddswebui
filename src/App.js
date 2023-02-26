import {Main} from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import styled from "styled-components";
import {light, dark} from "./Theme.styled";
import {ThemeProvider} from "styled-components";
import {createContext, useEffect, useState} from "react";
import {CommonProvider} from "./shared/context/CommonProvider";
import {QueryParamProvider} from 'use-query-params';
import {TABLE_DATA} from "./constants";
import {ReactRouter6Adapter} from 'use-query-params/adapters/react-router-6';
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

    //Filters
    const [sportsBooks, setSportsBooks] = useState(null);
    const [sportsTypes, setSportsTypes] = useState([]);
    const [selectedKey, setSelectedKey] = useState(null);
    const [opportunities, setOpportunities] = useState(null);
    const [betsTypes, setBetsTypes] = useState([]);
    const [games, setGames] = useState([]);

    const [loadingProcess, setLoadingProcess] = useState(false);
    const [isOpenFilter, setIsOpenFilter] = useState(false);

    //View settings
    const [tableVisible, setTableVisible] = useState(true);
    const [propVisible, setPropVisible] = useState(false);
    const [popularVisible, setPopularVisible] = useState(true);

    const [feedVisibility, setFeedVisibility] = useState(true);

    const theme = themesMap[currentTheme];

    const changePropFeedVisibility = (value) => {
        setPropVisible(value);
        console.log(popularVisible,  "  ", value, "  1: ", !popularVisible && !value);
        if (!popularVisible && !value) {
            console.log("setFeedVisibility");
            setFeedVisibility(false);
        }
    }

    const changePopularFeedVisibility = (value) => {
        setPopularVisible(value);
        console.log(propVisible,  "  ", value,  "  2  ", !propVisible && !value);
        if (!propVisible && !value) {
            console.log("setFeedVisibility");
            setFeedVisibility(false);
        }
    }
 
    const loadDataFromApi = () => {
        setPending(true);

        client.onmessage = (event) => {
            const json = JSON.parse(event.data);
            
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

    useEffect(() => {
        loadDataFromApi();
    }, []);

    useEffect(() => {
        if (localStorage.getItem('theme') !== currentTheme) {
            localStorage.setItem('theme', currentTheme);
        }
    }, [currentTheme]);

    useEffect(() => {
        const loadingTimeout = (callback, time) => {
            if (loadingProcess) return;

            setLoadingProcess(true);
            
            setTimeout(() => {
                callback();
                setLoadingProcess(false);
            }, time);
        };

        const handleInfiniteScroll = () => {
            loadingTimeout(() => {
                const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 20;
        
                if (endOfPage) {
                    setDataLength(dataLength + 2);
                }
    
                setLoadingProcess(false);
            }, 1000);
        };
        
        window.addEventListener("scroll", handleInfiniteScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleInfiniteScroll);
    }, [dataLength, loadingProcess]);

    const changeSelectedKey = value => {
        setSelectedKey(value);
        if (!tableVisible) return;
        if (value && data) {
            const indexTableData =  data.map(e => e.id).indexOf(value.id);
            if (indexTableData > dataLength) {
                setDataLength(indexTableData + 2);
                setTimeout(() => scrollToRow(value), 500);
            } else {
                scrollToRow(value);
            }
        }
    }

    const scrollToRow = (value) => {
        const element = document.querySelector(`.${value.id}`);
        element.scrollIntoView({behavior: 'smooth', block: 'center'});
    }

    return (
        <ThemePreferenceContext.Provider value={{currentTheme, setCurrentTheme}}>
            <ThemeProvider theme={theme}>
                <CommonProvider fullFeed={propVisible && popularVisible} isDrawerOpened={feedVisibility}>
                    <AppStyled>
                        <Header
                            changeSelectedKey={changeSelectedKey}
                            selectedKey={selectedKey}
                            opportunities={opportunities}
                            setOpportunities={setOpportunities}
                            openFilter={setIsOpenFilter}
                            isProp={propVisible}
                            isPopular={popularVisible}
                            visible={feedVisibility}
                            setVisible={setFeedVisibility}
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
                                            data={data}
                                            sportsBooks={sportsBooks}
                                            sportsTypes={sportsTypes}
                                            pending={pending}
                                            loadingRows={loadingProcess}
                                            sliceCounter={dataLength}
                                            betsTypes={betsTypes}
                                            games={games}
                                            toggleFilter={setIsOpenFilter}
                                            isOpenFilter={isOpenFilter}
                                            isTable={tableVisible}
                                            isProp={propVisible}
                                            isPopular={popularVisible}
                                            setTableView={setTableVisible}
                                            setPropFeedView={changePropFeedVisibility}
                                            setPopularFeedView={changePopularFeedVisibility}
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

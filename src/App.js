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
    const [sportsBooks, setSportsBooks] = useState(null);
    const [sportsTypes, setSportsTypes] = useState([]);
    const [selectedKey, setSelectedKey] = useState(null);
    const [opportunities, setOpportunities] = useState(null);

    const theme = themesMap[currentTheme];

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
            const booksList = getSportsBooks(allGames);
            const tableData = parseData(allGames, booksList);

            setData(tableData);
            setSportsTypes(sportsList);
            setSportsBooks(booksList);
            setPending(false);
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

    const changeSelectedKey = value => {
        setSelectedKey(value);
        if (value) {
            handleScroll(value);
        }
    }

    const handleScroll = (value) => {
        const element = document.querySelector(`.${value.id}`);
        element.scrollIntoView({behavior: 'smooth', block: 'center'});
    }

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
                                            data={data}
                                            sportsBooks={sportsBooks}
                                            sportsTypes={sportsTypes}
                                            pending={pending}
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

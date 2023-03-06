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

    //Filters
    const [selectedKey, setSelectedKey] = useState(null);
    const [opportunities, setOpportunities] = useState(null);
    const [showAllList, setShowAllList] = useState(true);

    const [isOpenFilter, setIsOpenFilter] = useState(false);

    //View settings
    const [propVisible, setPropVisible] = useState(true);
    const [popularVisible, setPopularVisible] = useState(true);

    const theme = themesMap[currentTheme];
    const [drawerOpened, setDrawerOpened] = useState(false);

    const changePropFeedVisibility = (value) => {
        setPropVisible(value);
        if (!popularVisible) {
            setDrawerOpened(value);
        }
    }

    const changePopularFeedVisibility = (value) => {
        setPopularVisible(value);
        if (!propVisible) {
            setDrawerOpened(value);
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') !== currentTheme) {
            localStorage.setItem('theme', currentTheme);
        }
    }, [currentTheme]);

    return (
        <ThemePreferenceContext.Provider value={{currentTheme, setCurrentTheme}}>
            <ThemeProvider theme={theme}>
                <CommonProvider
                    drawerOpened={drawerOpened}
                    setDrawerOpened={setDrawerOpened}
                >
                    <AppStyled>
                        <Header
                            changeSelectedKey={setSelectedKey}
                            selectedKey={selectedKey}
                            opportunities={opportunities}
                            setOpportunities={setOpportunities}
                            openFilter={setIsOpenFilter}
                            isProp={propVisible}
                            isPopular={popularVisible}
                            setShowAll={setShowAllList}
                        />
                        <AppBody>
                            <QueryParamProvider adapter={ReactRouter6Adapter}>
                                <Routes>
                                    <Route path="/" element=
                                    {
                                        <Main
                                            toggleFilter={setIsOpenFilter}
                                            isOpenFilter={isOpenFilter}
                                            isProp={propVisible}
                                            isPopular={popularVisible}
                                            setPropFeedView={changePropFeedVisibility}
                                            setPopularFeedView={changePopularFeedVisibility}
                                            showAll={showAllList}
                                            setShowAll={setShowAllList}
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

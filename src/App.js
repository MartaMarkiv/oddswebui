import {Main} from "./pages/Main";
import {Route, Routes} from "react-router-dom";
import {Header} from "./components/Header";
import styled from "styled-components";
import {light, dark} from "./Theme.styled";
import {ThemeProvider} from "styled-components";
import {createContext, useEffect, useState} from "react";
import {CommonProvider} from "./shared/context/CommonProvider";

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

    const theme = themesMap[currentTheme];

    useEffect(() => {
        if (localStorage.getItem('theme') !== currentTheme) {
            localStorage.setItem('theme', currentTheme);
            console.log('save');
        }
    }, [currentTheme]);


    return (
        <ThemePreferenceContext.Provider value={{currentTheme, setCurrentTheme}}>
            <ThemeProvider theme={theme}>
                <CommonProvider>
                    <AppStyled>
                        <Header/>
                        <AppBody>
                            <Routes>
                                <Route path="/" element={<Main/>}/>
                            </Routes>
                        </AppBody>
                        <AppFooter/>
                    </AppStyled>
                </CommonProvider>
            </ThemeProvider>
        </ThemePreferenceContext.Provider>
    );
}

export default App;

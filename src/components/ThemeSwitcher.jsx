import styled from "styled-components";
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';
import {ThemePreferenceContext} from "../App";
import {useContext} from "react";

const ThemeSwitcherContainerStyled = styled.div`
  height: 48px;
  border-radius: 60px;
  background: ${({theme}) => theme.colors.headerControls.bg};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;  
`;

const SwitcherStyled = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme, themeName}) => theme.colors.themeSwitcherButton[themeName].bg};
  cursor: pointer;
  
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const ThemeSwitcher = () => {
    const ctx = useContext(ThemePreferenceContext);
    const themes = [{
        icon: <SunIcon />,
        theme: 'light'
    }, {
        icon: <MoonIcon />,
        theme: 'dark'
    }];

    const changeTheme = (theme) => {
        ctx.setCurrentTheme(theme);
    }

    return <ThemeSwitcherContainerStyled>
        {
            themes.map(({theme, icon}) => <SwitcherStyled
                key={theme}
                themeName={theme}
                onClick={() => changeTheme(theme)}>
                { icon }
            </SwitcherStyled>)
        }
    </ThemeSwitcherContainerStyled>
}
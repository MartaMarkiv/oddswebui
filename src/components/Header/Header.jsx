import {HeaderControlPanel, HeaderStyled, LogoImage, LogoLink} from "./styles";
import {Search} from "../Search";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {OpportunityDrawer} from "../opportunity";

export const Header = () => {
    return (
        <HeaderStyled>
            <LogoLink href="/">
                <LogoImage />
            </LogoLink>
            <HeaderControlPanel>
                <Search />
                <ThemeSwitcher />
                <OpportunityDrawer />
            </HeaderControlPanel>
        </HeaderStyled>
    )
}
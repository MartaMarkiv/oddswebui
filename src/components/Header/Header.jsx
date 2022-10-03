import {HeaderControlPanel, HeaderStyled, LogoImage, LogoLink} from "./styles";
import {Search} from "../Search";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {OpportunityDrawer} from "../opportunity";
import {UserAvatar} from "../UserAvatar/UserAvatar";

export const Header = ({changeSelectedKey, selectedKey}) => {
    return (
        <HeaderStyled>
            <LogoLink href="/">
                <LogoImage />
            </LogoLink>
            <HeaderControlPanel>
                <Search />
                <ThemeSwitcher />
                <OpportunityDrawer
                    changeSelectedKey={changeSelectedKey}
                    selectedKey={selectedKey}
                />
                <UserAvatar />
            </HeaderControlPanel>
        </HeaderStyled>
    )
}
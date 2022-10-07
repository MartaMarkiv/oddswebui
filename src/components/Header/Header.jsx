import {HeaderControlPanel, HeaderStyled, LogoImage, LogoLink} from "./styles";
import {Search} from "../Search";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {OpportunityDrawer} from "../opportunity";
import {UserAvatar} from "../UserAvatar/UserAvatar";

export const Header = ({
    changeSelectedKey,
    selectedKey,
    opportunities,
    setOpportunities
}) => {
    return (
        <HeaderStyled>
            <LogoLink href="/">
                <LogoImage />
            </LogoLink>
            <HeaderControlPanel>
                {/* <Search /> */}
                <ThemeSwitcher />
                <OpportunityDrawer
                    changeSelectedKey={changeSelectedKey}
                    selectedKey={selectedKey}
                    collection={opportunities}
                    setCollection={setOpportunities}
                />
                {/* <UserAvatar /> */}
            </HeaderControlPanel>
        </HeaderStyled>
    )
}
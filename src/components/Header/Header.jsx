import {HeaderControlPanel, HeaderStyled, LogoImage, LogoLink} from "./styles";
import { Button } from "antd";
import {Search} from "../Search";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {OpportunityDrawer} from "../opportunity";
import {UserAvatar} from "../UserAvatar/UserAvatar";

export const Header = ({
    changeSelectedKey,
    selectedKey,
    opportunities,
    setOpportunities,
    openFilter
}) => {

    const showFilter = () => {
        openFilter(true);
    };

    return (
        <HeaderStyled>
            <LogoLink href="/">
                <LogoImage />
            </LogoLink>
            <HeaderControlPanel>
                {/* <Search /> */}
                <Button type="primary" onClick={showFilter}>
                    Open
                </Button>
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
import {
    HeaderControlPanel,
    HeaderStyled,
    LogoImage,
    LogoLink,
    FilterButton,
    FilterImage
} from "./styles";
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
                <FilterButton onClick={showFilter}>
                    <FilterImage />
                </FilterButton>
                
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
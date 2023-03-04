import {
    HeaderControlPanel,
    HeaderStyled,
    LogoImage,
    LogoLink,
    FilterButton,
    FilterImage
} from "./styles";
import {Search} from "../Search";
import {Switcher} from "../Switcher";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {OpportunityDrawer} from "../opportunity";
import {UserAvatar} from "../UserAvatar/UserAvatar";

export const Header = ({
    changeSelectedKey,
    selectedKey,
    opportunities,
    setOpportunities,
    openFilter,
    isProp,
    isPopular,
    setShowAll
}) => {

    const showFilter = () => {
        openFilter(true);
    };

    const switchHandler = (value) => {
        setShowAll(value === "all");
    }

    return (
        <HeaderStyled>
            <LogoLink href="/">
                <LogoImage />
            </LogoLink>
            <HeaderControlPanel>
                {/* <Search /> */}
                <Switcher
                    leftText="All"
                    rightText="Arbs"
                    name="opportunity"
                    leftValue="all"
                    rightValue="arbs"
                    initialValue="all"
                    onUpdate={switchHandler}
                />
                <FilterButton onClick={showFilter}>
                    <FilterImage />
                </FilterButton>
                
                <ThemeSwitcher />
                {/* <OpportunityDrawer
                    changeSelectedKey={changeSelectedKey}
                    selectedKey={selectedKey}
                    collection={opportunities}
                    setCollection={setOpportunities}
                    isProp={isProp}
                    isPopular={isPopular}
                /> */}
                {/* <UserAvatar /> */}
            </HeaderControlPanel>
        </HeaderStyled>
    )
}
import {
    HeaderControlPanel,
    HeaderStyled,
    LogoImage,
    LogoLink,
    FilterButton,
    FilterImage
} from "./styles";
import {Switcher} from "../Switcher";
import {ThemeSwitcher} from "../ThemeSwitcher";
import {UserAvatar} from "../UserAvatar/UserAvatar";

export const Header = ({
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
                <Switcher
                    leftText="All"
                    rightText="Arbs"
                    name="opportunity"
                    leftValue="all"
                    rightValue="arbs"
                    initialValue="all"
                    isProp={isProp}
                    isPopular={isPopular}
                    onUpdate={switchHandler}
                />
                <FilterButton onClick={showFilter}>
                    <FilterImage />
                </FilterButton>
                
                <ThemeSwitcher />
                {/* <UserAvatar /> */}
            </HeaderControlPanel>
        </HeaderStyled>
    )
}
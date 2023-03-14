import {
    HeaderControlPanel,
    HeaderStyled,
    LogoImage,
    LogoLink,
    FilterButton,
    FilterImage
} from "./styles";
import { Switcher } from "../Switcher";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { HeaderMenu } from "../HeaderMenu";

export const Header = ({
    openFilter,
    isProp,
    isPopular,
    setShowAll,
    user
}) => {

    const showFilter = () => {
        if (!user) return;
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
                    user={user}
                />
                <FilterButton onClick={showFilter} disabled={!user}>
                    <FilterImage />
                </FilterButton>
                
                <ThemeSwitcher />
                <HeaderMenu></HeaderMenu>
            </HeaderControlPanel>
        </HeaderStyled>
    )
}
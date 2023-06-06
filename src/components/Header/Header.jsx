import {
    HeaderControlPanel,
    HeaderStyled,
    LogoImage,
    LogoLink,
    FilterButton,
    FilterImage
} from "./styles";
import { Switcher } from "../Switcher/Switcher";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { HeaderMenu } from "../HeaderMenu";
import { useCurrentUser } from "../../shared/context/UserProvider";

export const Header = ({
    openFilter,
    isProp,
    isPopular,
    setShowAll
}) => {

    const { currentUser } = useCurrentUser();
    const showFilter = () => {
        if (!currentUser) return;
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
            { currentUser && currentUser.token &&
                    <>
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
                        <HeaderMenu></HeaderMenu>
                    </>
                }
            </HeaderControlPanel>
        </HeaderStyled>
    )
}
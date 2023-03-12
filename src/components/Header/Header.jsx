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
import { HeaderMenu } from "../HeaderMenu";
import { Dropdown, Button, Space } from 'antd';

const items2 = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: '0',
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: '3rd menu item',
      key: '3',
    },
  ];



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
                <HeaderMenu></HeaderMenu>
            </HeaderControlPanel>
        </HeaderStyled>
    )
}
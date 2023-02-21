import {
    FilterPanelContainer,
    FilterPanelItem,
    DrawerStyled,
    CloseIcon
} from "./styles";
import {SportsBookFilter} from "./SportsBookFilter";
import {SportFilter} from "./SportFilter";
import {GamesFilter} from "./GamesFilter";
import {BetsFilter} from "./BetsFilter";
import {BetsShownFilter} from "./BetsShownFilter";
import {MiddleRangeFilter} from "./MiddleRangeFilter/MiddleRangeFilter";
import {RefreshButton} from "./RefreshButton/RefreshButton";
import {FavoriteButton} from "./FavoriteButton";
import { ViewSettings } from "../../../ViewSettings"

export const FilterPanel = ({
    sportsBooks,
    changeBook,
    changeQuarter,
    quarters,
    sports,
    changeSport,
    betsTypes,
    changeBets,
    games,
    changeGame,
    isOpenFilter,
    toggleFilter
}) => {

    const closeFilter = () => {
        toggleFilter(false);
    }

    return (
        <DrawerStyled
            placement="top"
            closable
            mask={false}
            height={100}
            closeIcon={<CloseIcon />}
            onClose={closeFilter}
            open={isOpenFilter}
        >
            <FilterPanelContainer>
                <FilterPanelItem>
                    <SportsBookFilter books={sportsBooks} changeFilter={changeBook}/>
                </FilterPanelItem>
                <FilterPanelItem>
                    <SportFilter sports={sports} changeSport={changeSport}/>
                </FilterPanelItem>
                <FilterPanelItem>
                    <GamesFilter games={games} selectGame={changeGame}/>
                </FilterPanelItem>
                <FilterPanelItem>
                    <BetsFilter bets={betsTypes} changeFilter={changeBets}/>
                </FilterPanelItem>
                <FilterPanelItem>
                    <BetsShownFilter changeFilter={changeQuarter} quarters={quarters}/>
                </FilterPanelItem>
                {/* <FilterPanelItem>
                    <MiddleRangeFilter />
                </FilterPanelItem>
                <FilterPanelItem>
                    <FavoriteButton />
                </FilterPanelItem>
                <FilterPanelItem>
                    <RefreshButton />
                </FilterPanelItem> */}
            </FilterPanelContainer>
            <ViewSettings></ViewSettings>
        </DrawerStyled>
    )
}
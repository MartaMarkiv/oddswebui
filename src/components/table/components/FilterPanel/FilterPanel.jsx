import {FilterPanelContainer, FilterPanelItem} from "./styles";
import {SportsBookFilter} from "./SportsBookFilter";
import {SportFilter} from "./SportFilter";
import {GamesFilter} from "./GamesFilter";
import {BetsFilter} from "./BetsFilter";
import {BetsShownFilter} from "./BetsShownFilter";
import {MiddleRangeFilter} from "./MiddleRangeFilter/MiddleRangeFilter";
import {RefreshButton} from "./RefreshButton/RefreshButton";
import {FavoriteButton} from "./FavoriteButton";

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
    changeGame
}) => {

    return (
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
                <BetsFilter />
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
    )
}
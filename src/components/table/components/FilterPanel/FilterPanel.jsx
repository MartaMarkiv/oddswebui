import {FilterPanelContainer, FilterPanelItem} from "./styles";
import {SportsBookFilter} from "./SportsBookFilter";
import {SportFilter} from "./SportFilter";
import {GamesFilter} from "./GamesFilter";
import {BetsFilter} from "./BetsFilter";
import {BetsShownFilter} from "./BetsShownFilter";
import {MiddleRangeFilter} from "./MiddleRangeFilter/MiddleRangeFilter";
import {RefreshButton} from "./RefreshButton/RefreshButton";
import {FavoriteButton} from "./FavoriteButton";
import {ArrayParam, useQueryParams, withDefault} from "use-query-params";

export const FilterPanel = () => {
    const MyFiltersParam = withDefault(ArrayParam, [])
    const [query, setQuery] = useQueryParams({
        filters: MyFiltersParam,
    });

    return (
        <FilterPanelContainer>
            <FilterPanelItem>
                <SportsBookFilter />
            </FilterPanelItem>
            <FilterPanelItem>
                <SportFilter />
            </FilterPanelItem>
            <FilterPanelItem>
                <GamesFilter />
            </FilterPanelItem>
            <FilterPanelItem>
                <BetsFilter />
            </FilterPanelItem>
            <FilterPanelItem>
                <BetsShownFilter />
            </FilterPanelItem>
            <FilterPanelItem>
                <MiddleRangeFilter />
            </FilterPanelItem>
            <FilterPanelItem>
                <FavoriteButton />
            </FilterPanelItem>
            <FilterPanelItem>
                <RefreshButton />
            </FilterPanelItem>
        </FilterPanelContainer>
    )
}
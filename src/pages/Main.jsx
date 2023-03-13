import React from 'react';
import styled from "styled-components";
import { FilterPanel } from "../components/table/components/FilterPanel";
import {OpportunityDrawer} from "../components/opportunity";


const StyledMain = styled.div`
  position: relative;
`;

export const Main = ({
    toggleFilter,
    isOpenFilter,
    isProp,
    isPopular,
    setPropFeedView,
    setPopularFeedView,
    showAll
}) => {
    
    return <StyledMain>
        <FilterPanel
            isOpenFilter={isOpenFilter}
            toggleFilter={toggleFilter}
            isProp={isProp}
            isPopular={isPopular}
            setPropFeedView={setPropFeedView}
            setPopularFeedView={setPopularFeedView}
        />
        <OpportunityDrawer
            isProp={isProp}
            isPopular={isPopular}
            showAll={showAll}
        />
    </StyledMain>

}
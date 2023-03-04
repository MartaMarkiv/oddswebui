import React, { useState } from 'react';
import styled from "styled-components";
import { PendingScreen } from "../components/PendingScreen";
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
    showAll,
    setShowAll
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
            setShowAll={setShowAll}
        />
    </StyledMain>

}
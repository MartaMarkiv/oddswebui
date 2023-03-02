import React, { useState } from 'react';
import styled from "styled-components";
import { PendingScreen } from "../components/PendingScreen";
import { FilterPanel } from "../components/table/components/FilterPanel";

const StyledMain = styled.div`
  position: relative;
`;

export const Main = ({
    toggleFilter,
    isOpenFilter,
    isProp,
    isPopular,
    setPropFeedView,
    setPopularFeedView
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
    </StyledMain>

}
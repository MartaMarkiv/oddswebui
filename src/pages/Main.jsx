import React, {useState} from 'react';
import styled from "styled-components";
import {BettingTable} from "../components/table";
import {
    sportsBooksFilter,
    quartersFilter,
    sportsFilter,
    betsFilter,
    gameFilter
} from "../components/table/utils";
import {PendingScreen} from "../components/PendingScreen";
import {SubTitle} from "../components/typography/SubTitle/SubTitle";
import {FilterPanel} from "../components/table/components/FilterPanel";

const StyledMain = styled.div`
  position: relative;
`;

export const Main = ({
    opportunities,
    selectedKey,
    dataLength,
    sportsTypes,
    betsTypes,
    games,
    sportsBooks,
    pending,
    loadingRows,
    toggleFilter,
    isOpenFilter,
    data,
    sliceCounter,
    isTable,
    isProp,
    isPopular,
    setTableView,
    setPropFeedView,
    setPopularFeedView
}) => {
    
    //Selected filters
    const [selectedSports, setSelectedSports] = useState([]);
    const [selectedBets, setSelectedBets] = useState([]);
    const [selectedSportsBooks, setSelectedSportsBooks] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);
    const [selectedQuarters, setSelectedQuarters] = useState([]);

    let filteredData = selectedSports.length ?
        sportsFilter(data, selectedSports) :
        data;
    
    filteredData = selectedBets.length ?
        betsFilter(filteredData, selectedBets) :
        filteredData;
        
    filteredData = selectedGames.length ?
        gameFilter(filteredData, selectedGames) :
        filteredData;

    filteredData = selectedSportsBooks.length ?
        sportsBooksFilter(filteredData, selectedSportsBooks) :
        filteredData;

    filteredData = selectedQuarters.length ?
        quartersFilter(filteredData, selectedQuarters) :
        filteredData;

    filteredData = filteredData ? filteredData.slice(0, sliceCounter) : [];
    return <StyledMain>
        {pending
            ? <PendingScreen/>
            : <>
                {
                    dataLength
                    ? <>
                        <FilterPanel
                            sportsBooks={sportsBooks}
                            changeBook={setSelectedSportsBooks}
                            changeQuarter={setSelectedQuarters}
                            quarters={selectedQuarters}
                            sports={sportsTypes}
                            changeSport={setSelectedSports}
                            betsTypes={betsTypes}
                            changeBets={setSelectedBets}
                            games={games}
                            changeGame={setSelectedGames}
                            isOpenFilter={isOpenFilter}
                            toggleFilter={toggleFilter}
                            isTable={isTable}
                            isProp={isProp}
                            isPopular={isPopular}
                            setTableView={setTableView}
                            setPropFeedView={setPropFeedView}
                            setPopularFeedView={setPopularFeedView}
                        />
                        <BettingTable
                            data={filteredData}
                            opportunities={opportunities}
                            selectedRow={selectedKey}
                            countRows={dataLength - filteredData.length}
                            loadingRows={loadingRows}
                        />
                    </>
                    :<SubTitle>No live games</SubTitle>
                }
                
            </>}
    </StyledMain>

}
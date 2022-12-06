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
import {Title} from "../components/typography/Title/Title";
import {SubTitle} from "../components/typography/SubTitle/SubTitle";


const StyledMain = styled.div`
  position: relative;
`;

const TableWrapper = styled.div`
  padding-bottom: 40px;
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
    tableData,
    loadMoreData
}) => {
    
    //Selected filters
    const [selectedSports, setSelectedSports] = useState([]);
    const [selectedBets, setSelectedBets] = useState([]);
    const [selectedSportsBooks, setSelectedSportsBooks] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);
    const [selectedQuarters, setSelectedQuarters] = useState([]);

    let filteredData = selectedSports.length ?
        sportsFilter(tableData, selectedSports) :
        tableData;
    
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

    return <StyledMain>
        {pending
            ? <PendingScreen/>
            : <>
                {
                    dataLength
                    ? <TableWrapper>
                        <Title>Betting table</Title>
                        <BettingTable
                            sportsBooks={sportsBooks}
                            data={filteredData}
                            opportunities={opportunities}
                            changeBook={setSelectedSportsBooks}
                            changeQuarter={setSelectedQuarters}
                            selectedQuarters={selectedQuarters}
                            sportsTypes={sportsTypes}
                            changeSport={setSelectedSports}
                            selectedRow={selectedKey}
                            loadMoreData={loadMoreData}
                            hasMore={tableData.length < dataLength}
                            betsTypes={betsTypes}
                            changeBets={setSelectedBets}
                            games={games}
                            selectGame={setSelectedGames}
                        />
                    </TableWrapper>
                    :<SubTitle>No live games</SubTitle>
                }
                
            </>}
    </StyledMain>

}
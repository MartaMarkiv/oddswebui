import React, {useState} from 'react';
import styled from "styled-components";
import {BettingTable} from "../components/table";
import {
    sportsBooksFilter,
    quartersFilter,
    sportsFilter
} from "../components/table/utils";
import {PendingScreen} from "../components/PendingScreen";
import {Title} from "../components/typography/Title/Title";
import {SubTitle} from "../components/typography/SubTitle/SubTitle";


const StyledMain = styled.div`
  position: relative;
`;

export const Main = ({opportunities, selectedKey, data, sportsTypes, sportsBooks, pending}) => {
    const [dataLength, setDataLength] = useState(10);
    const [selectedSports, setSelectedSports] = useState([]);
    const [selectedSportsBooks, setSelectedSportsBooks] = useState([]);
    const [selectedQuarters, setSelectedQuarters] = useState([]);

    const loadMoreData = () => {
        setDataLength(dataLength + 2);
    }

    const changeQuarters = (values) => {
        setSelectedQuarters(values);
    }

    let filteredData = data ? data.slice(0, dataLength) : [];

    filteredData = selectedSports.length ?
        sportsFilter(filteredData, selectedSports) :
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
                    data
                    ? <>
                        <Title>Betting table</Title>
                        <BettingTable
                            sportsBooks={sportsBooks}
                            data={filteredData}
                            opportunities={opportunities}
                            changeBook={setSelectedSportsBooks}
                            changeQuarter={changeQuarters}
                            selectedQuarters={selectedQuarters}
                            sportsTypes={sportsTypes}
                            changeSport={setSelectedSports}
                            selectedRow={selectedKey}
                            loadMoreData={loadMoreData}
                            hasMore={filteredData.length !== data.length}
                        />
                    </>
                    :<SubTitle>No live games</SubTitle>
                }
                
            </>}
    </StyledMain>

}
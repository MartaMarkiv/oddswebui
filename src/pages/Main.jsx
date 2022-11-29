import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { w3cwebsocket as WebSocket } from "websocket";
import {BettingTable} from "../components/table";
import {
    parseData,
    sportsBooksFilter,
    getSportsBooks,
    quartersFilter,
    sportsFilter,
    betsFilter
} from "../components/table/utils";
import {PendingScreen} from "../components/PendingScreen";
import {Title} from "../components/typography/Title/Title";
import {SubTitle} from "../components/typography/SubTitle/SubTitle";
import {TABLE_DATA, QUARTERS_LIST} from "../constants";

const client = new WebSocket(TABLE_DATA);

const StyledMain = styled.div`
  position: relative;
`;

export const Main = ({opportunities, selectedKey}) => {
    const [data, setData] = useState(null);

    //For filters panel
    const [sportsBooks, setSportsBooks] = useState([]);
    const [betsTypes, setBetsTypes] = useState([]);
    const [sportsTypes, setSportsTypes] = useState([]);
    
    //Selected filters
    const [selectedSports, setSelectedSports] = useState([]);
    const [selectedBets, setSelectedBets] = useState([]);
    const [selectedSportsBooks, setSelectedSportsBooks] = useState([]);
    const [selectedQuarters, setSelectedQuarters] = useState([]);

    const [pending, setPending] = useState(false);

    const loadDataFromApi = () => {
        setPending(true);

        client.onmessage = (event) => {
            const json = JSON.parse(event.data);
            
            if (!json || !json.length) {
                setData(null);
                setPending(false);
                return;
            }

            const sportsList = [];
            const allGames = json.map(sports => {
                sportsList.push(sports.sport);
                return sports.games.map(gameItem => {
                    return {...gameItem, sport: sports.sport};
                });
            }).flat();
            const {books: booksList, bets} = getSportsBooks(allGames);
            const tableData = parseData(allGames, booksList);

            setData(tableData);
            setSportsTypes(sportsList);
            setSportsBooks(booksList);
            setBetsTypes(bets);
            setPending(false);
        };

        client.onerror = () => {
            console.log("Socket connection error");
        };
    }

    useEffect(() => {
        loadDataFromApi();
    }, []);

    let filteredData = selectedSports.length ?
        sportsFilter(data, selectedSports) :
        data;
    
    filteredData = selectedBets.length ?
        betsFilter(filteredData, selectedBets) :
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
                            changeQuarter={setSelectedQuarters}
                            selectedQuarters={selectedQuarters}
                            sportsTypes={sportsTypes}
                            changeSport={setSelectedSports}
                            selectedRow={selectedKey}
                            betsTypes={betsTypes}
                            changeBets={setSelectedBets}
                        />
                    </>
                    :<SubTitle>No live games</SubTitle>
                }
                
            </>}
    </StyledMain>

}
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
    gameFilter
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
    const [sportsBooks, setSportsBooks] = useState(null);
    const [games, setGames] = useState(null);
    const [sportsTypes, setSportsTypes] = useState([]);
    const [selectedSports, setSelectedSports] = useState([]);
    const [selectedSportsBooks, setSelectedSportsBooks] = useState([]);
    const [selectedGames, setSelectedGames] = useState([]);
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
            const {books: booksList, games} = getSportsBooks(allGames);
            const tableData = parseData(allGames, booksList);

            setData(tableData);
            setSportsTypes(sportsList);
            setSportsBooks(booksList);
            setGames(games);
            setPending(false);
        };

        client.onerror = () => {
            console.log("Socket connection error");
        };
    }

    useEffect(() => {
        loadDataFromApi();
    }, []);

    const changeQuarters = (values) => {
        const list = values.map(item => QUARTERS_LIST[item]).flat();
        setSelectedQuarters(list);
    }

    let filteredData = selectedSports.length ?
        sportsFilter(data, selectedSports) :
        data;
    
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
                            games={games}
                            selectGame={setSelectedGames}
                        />
                    </>
                    :<SubTitle>No live games</SubTitle>
                }
                
            </>}
    </StyledMain>

}
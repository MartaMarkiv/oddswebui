import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { w3cwebsocket as WebSocket } from "websocket";
import {BettingTable} from "../components/table";
import {parseData, sportsBooksFilter, getSportsBooks} from "../components/table/utils";
import {PendingScreen} from "../components/PendingScreen";
import {Title} from "../components/typography/Title/Title";
import {SubTitle} from "../components/typography/SubTitle/SubTitle";
import {TABLE_DATA} from "../constants";

const client = new WebSocket(TABLE_DATA);

const StyledMain = styled.div`
  position: relative;
`;

export const Main = ({opportunities}) => {
    const [data, setData] = useState(null);
    const [sportsBooks, setSportsBooks] = useState(null);
    const [selectedSportsBooks, setSelectedSportsBooks] = useState([]);
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

            const allGames = json.map(sports => sports.games.map(gameItem => {return {...gameItem, sport: sports.sport};})).flat();
            const booksList = getSportsBooks(allGames);
            const tableData = parseData(allGames, booksList);

            setData(tableData);
            setSportsBooks(booksList);
            setPending(false);
        };

        client.onerror = () => {
            console.log("Socket connection error");
        };
    }

    useEffect(() => {
        loadDataFromApi();
    }, []);

    const changeSportsBook = (value) => {
        setSelectedSportsBooks(value);
    }

    const filteredData = selectedSportsBooks.length ?
        sportsBooksFilter(data, selectedSportsBooks) :
        data;

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
                            changeBook={changeSportsBook}
                        />
                    </>
                    :<SubTitle>No live games</SubTitle>
                }
                
            </>}
    </StyledMain>

}
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { w3cwebsocket as WebSocket } from "websocket";
import {BettingTable} from "../components/table";
import {parseData, sportsBooksFilter, getSportsBooks, quartersFilter} from "../components/table/utils";
import {PendingScreen} from "../components/PendingScreen";
import {Title} from "../components/typography/Title/Title";
import {SubTitle} from "../components/typography/SubTitle/SubTitle";
import {TABLE_DATA, QUARTERS_LIST} from "../constants";

const client = new WebSocket(TABLE_DATA);

const StyledMain = styled.div`
  position: relative;
`;

export const Main = ({opportunities}) => {
    const [data, setData] = useState(null);
    const [sportsBooks, setSportsBooks] = useState(null);
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

            const allGames = json.map(sports => sports.games.map(gameItem => {return {...gameItem, sport: sports.sport};})).flat();
            // console.log(allGames);
            const booksList = getSportsBooks(allGames);
            const tableData = parseData(allGames, booksList);
            console.log(tableData);

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

    const changeQuarters = (values) => {
        console.log(values);
        const list = values.map(item => QUARTERS_LIST[item]).flat();
        console.log(list);
        setSelectedQuarters(list);
        if (list.indexOf("all") >= 0) return;
    }

    let filteredData = selectedSportsBooks.length ?
        sportsBooksFilter(data, selectedSportsBooks) :
        data;

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
                            changeBook={changeSportsBook}
                            changeQuarter={changeQuarters}
                            selectedQuarters={selectedQuarters}
                        />
                    </>
                    :<SubTitle>No live games</SubTitle>
                }
                
            </>}
    </StyledMain>

}
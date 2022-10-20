import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { w3cwebsocket as WebSocket } from "websocket";
import {BettingTable} from "../components/table";
import {parseData, sportsBooksFilter} from "../components/table/utils";
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
            } else {
                console.log(json);
                const games = json[0].games;
                const {
                    tableData,
                    books
                 } = parseData(games);
                setData(tableData);
                setSportsBooks(books);
                setPending(false);
                // console.log(tableData);
            }
        };

        client.onerror = () => {
            console.log("Socket connection error");
        };
    }

    useEffect(() => {
        loadDataFromApi();
    }, []);

    const changeSportsBook = (value) => {
        console.log("changeSportsBook: ", value);
        setSelectedSportsBooks(value);
    }

    const filteredData = selectedSportsBooks.length ?
        sportsBooksFilter(data, selectedSportsBooks) :
        data;

    console.log("selectedSportsBooksL ", selectedSportsBooks);
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
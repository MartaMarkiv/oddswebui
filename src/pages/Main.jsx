import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { w3cwebsocket as WebSocket } from "websocket";
import {BettingTable} from "../components/table";
import {
    parseData,
    sportsBooksFilter,
    getSportsBooks,
    quartersFilter,
    sportsFilter
} from "../components/table/utils";
import {PendingScreen} from "../components/PendingScreen";
import {Title} from "../components/typography/Title/Title";
import {SubTitle} from "../components/typography/SubTitle/SubTitle";
import {TABLE_DATA} from "../constants";

const client = new WebSocket(TABLE_DATA);

const StyledMain = styled.div`
  position: relative;
`;

export const Main = ({opportunities, selectedKey}) => {
    const [data, setData] = useState(null);
    const [dataLength, setDataLength] = useState(20);
    const [sportsBooks, setSportsBooks] = useState(null);
    const [sportsTypes, setSportsTypes] = useState([]);
    const [selectedSports, setSelectedSports] = useState([]);
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
            const booksList = getSportsBooks(allGames);
            const tableData = parseData(allGames, booksList);

            setData(tableData);
            setSportsTypes(sportsList);
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
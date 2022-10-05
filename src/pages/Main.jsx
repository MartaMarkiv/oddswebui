import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { w3cwebsocket as WebSocket } from "websocket";
import {BettingTable} from "../components/table";
import {parseData} from "../components/table/utils";
import {PendingScreen} from "../components/PendingScreen";
import {Title} from "../components/typography/Title/Title";
import {SubTitle} from "../components/typography/SubTitle/SubTitle";
import {TABLE_DATA} from "../constants";

const client = new WebSocket(TABLE_DATA);

const StyledMain = styled.div`
  position: relative;
`;

export const Main = () => {
    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);

    const loadDataFromApi = async () => {
        setPending(true);

        client.onmessage = (event) => {
            const json = JSON.parse(event.data);
            const collection = parseData(json);
            setData(collection);
            setPending(false);
        };

        client.onerror = () => {
            console.log("Socket connection error");
        };
    }

    useEffect(() => {
        loadDataFromApi();
    }, []);

    return <StyledMain>
        {pending
            ? <PendingScreen/>
            : <>
                {
                    data
                    ? <>
                        <Title>Betting table</Title>
                        <BettingTable data={data}/>
                    </>
                    :<SubTitle>No live games</SubTitle>
                }
                
            </>}
    </StyledMain>

}
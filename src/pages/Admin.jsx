import React, { useEffect } from 'react';
import styled from "styled-components";
import { Button } from 'antd';
import axios from 'axios';
import { FilterPanel } from "../components/table/components/FilterPanel";


const StyledMain = styled.div`
  position: relative;
`;

export const Admin = ({
    toggleFilter,
    isOpenFilter,
    isProp,
    isPopular,
    setPropFeedView,
    setPopularFeedView
}) => {

    const connectApi = () => {
        axios.get(`http://localhost:8000/get_users/`)
        .then(res => {
            console.log(res);
        })
    }

    // useEffect(() => {
    //     connectApi();
    // }, []);

    const sendReq = () => {
        axios({url: `http://localhost:8000/create_user/`,
        data: {"name": "John", "last_name": "Doe", "email": "mmar@keplercode.com"},
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => {
            console.log(res);
        })
    }
    
    return <StyledMain>
        <FilterPanel
            isOpenFilter={isOpenFilter}
            toggleFilter={toggleFilter}
            isProp={isProp}
            isPopular={isPopular}
            setPropFeedView={setPropFeedView}
            setPopularFeedView={setPopularFeedView}
        />

        <Button onClick={sendReq}>Send</Button>

    </StyledMain>

}
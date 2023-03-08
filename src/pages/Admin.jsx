import React, { useEffect } from 'react';
import styled from "styled-components";
import { Button } from 'antd';
import axios from 'axios';
import { UsersTable } from '../components/usersTable/UsersTable';
import { AdminWrapper } from '../components/AdminWrapper';

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
        axios({url: `http://localhost:8000/user/`,
        data: {"name": "John", "last_name": "Doe", "email": "mmar@keplercode.com"},
        method: "post",
        headers: {
            'Content-Type': 'application/json',
        }})
        .then(res => {
            console.log(res);
        })
    }
    
    return <AdminWrapper/>

}
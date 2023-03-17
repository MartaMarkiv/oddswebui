import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ResetPassword } from "../components/ResetPassword";
import { useParams } from "react-router-dom";
import { updatePasswordRequest } from "../api/userRequests";
import { Title } from "../components/typography/Title/Title";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const StyledMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
`;

export const ResetPasswordPage = ({}) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ipAddress, setIpAddress] = useState("");

    const onReset = ({password}) => {
        updatePasswordRequest(password, ipAddress, id, data => {
            if (data.success) {
                navigate("/", { replace: true});
            }
        });
    };

    const getData = async () => {
        const res = await axios.get('https://api.db-ip.com/v2/free/self');
        const { data } = res;
        setIpAddress(data.ipAddress);
      }
      
      useEffect( () => {
        getData()
      }, [])

    return <StyledMain>
        <Title>Choose a new password</Title>
        <ResetPassword reset={onReset}/>
    </StyledMain>

}
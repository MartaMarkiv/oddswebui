import { useEffect, useState } from "react";
import axios from "axios";
import {
    Wrapper,
    HeaderPanel,
    AddUserButton
} from "./styles";
import { UsersTable } from "../usersTable";
import { Title } from "../typography/Title/Title";
import { SubTitle } from "../typography/SubTitle/SubTitle";

export const AdminWrapper = () => {

    const [users, setUsers] = useState([]);

    const getUsers = () => {
        axios.get(`http://localhost:8000/users/`)
        .then(res => {
            console.log(res);
            setUsers(res.data);
        }).catch(err => {

        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    const sendReq = () => {
        axios.post(`http://localhost:8000/user/`,
        {"name": "Marta", "last_name": "Markiv", "email": "markiv.marta.b@gmail.com"})
        .then(res => {
            console.log(res);
        })
    }

    return (
        <Wrapper>
            <Title>Admin</Title>
            <HeaderPanel>
                <SubTitle>Users</SubTitle>
                <AddUserButton onClick={sendReq}>+ Add user</AddUserButton>
            </HeaderPanel>
            <UsersTable users={users}></UsersTable>
        </Wrapper>
    )
}
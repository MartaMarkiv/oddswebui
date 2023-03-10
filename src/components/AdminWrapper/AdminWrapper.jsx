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
import { CreateUserWindow } from "../CreateUserWindow";

export const AdminWrapper = () => {

    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const getUsers = () => {
        axios.get(`http://localhost:8000/users/`)
        .then(res => {
            console.log(res);
            setUsers(res.data);
        }).catch(err => {

        })
    }

    const createUser = (values) => {
        console.log("Create user");
        console.log(values);
        setShowForm(false);
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

    const showCreateForm = () => {
        setShowForm(true);
    }

    const closeCreateForm = () => {
        setShowForm(false);
    }

    return (
        <Wrapper>
            <Title>Admin</Title>
            <HeaderPanel>
                <SubTitle>Users</SubTitle>
                <AddUserButton onClick={showCreateForm}>+ Add user</AddUserButton>
            </HeaderPanel>
            <UsersTable users={users}></UsersTable>
            { 
                showForm && <CreateUserWindow
                    isOpen={showForm}
                    create={createUser}
                    close={closeCreateForm}
                    />
            }
        </Wrapper>
    )
}
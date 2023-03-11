import { useEffect, useState } from "react";
import {
    Wrapper,
    HeaderPanel,
    AddUserButton
} from "./styles";
import { UsersTable } from "../usersTable";
import { Title } from "../typography/Title/Title";
import { SubTitle } from "../typography/SubTitle/SubTitle";
import { CreateUserWindow } from "../CreateUserWindow";
import {
    createUserRequest,
    getUsersRequest,
    deleteUserRequest,
    updateUserRequest,
    resetPasswordRequest
} from "../../api/userRequests";

export const AdminWrapper = () => {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const getUsers = () => {
        console.log("get users");
        getUsersRequest(({success, data, error}) => {
            setLoading(true);
            if (success) {
                setUsers(data);
            }
        })
    }

    const createUser = ({firstName: name, email, lastName: last_name}) => {
        createUserRequest({name, email, last_name}, (data) => {
           console.log(data.success);
           if (data.success) {
            getUsers();
           }
        });
        setShowForm(false);
    };

    const deleteUser = ({email}) => {
        console.log(email);
        deleteUserRequest(email, data => {
            console.log(data);
            getUsers();
        })
    };

    const toggleBlockStatus = ({email, value}) => {
        console.log("block: ", email, "   ", value);
        updateUserRequest({email, field_name: "is_blocked", value_name: value}, data => {
            console.log(data);
            getUsers();
        })

    }

    const resetPassword = ({email}) => {
        console.log("reset password: ", email);
        resetPasswordRequest(email, data => {
            console.log(data);
            // getUsers();
        })
    }

    useEffect(() => {
        getUsers();
    }, []);

    const showCreateForm = () => {
        setShowForm(true);
    }

    const closeCreateForm = () => {
        setShowForm(false);
    }

    return (
        <Wrapper>
            <Title>Admin</Title>
            {
                loading && <>
                    <HeaderPanel>
                        <SubTitle>Users</SubTitle>
                        <AddUserButton onClick={showCreateForm}>+ Add user</AddUserButton>
                    </HeaderPanel>
                    <UsersTable
                        users={users}
                        deleteUser={deleteUser}
                        toggleBlockStatus={toggleBlockStatus}
                        resetPassword={resetPassword}
                    />
                    { 
                        showForm && <CreateUserWindow
                                isOpen={showForm}
                                create={createUser}
                                close={closeCreateForm}
                            />
                    }
                </>
            }
            
        </Wrapper>
    )
}
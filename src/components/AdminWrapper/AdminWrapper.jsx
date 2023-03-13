import { useEffect, useState } from "react";
import { notification } from "antd";
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
import { parseUsersData } from "../usersTable/utils";

export const AdminWrapper = () => {

    const openNotification = (content) => {
        notification.error({
          message: "Error",
          description: content,
        });
    };

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [showForm, setShowForm] = useState(false);

    const getUsers = () => {
        getUsersRequest(({success, data, error}) => {
            setLoading(true);
            if (success) {
                const parsedData = parseUsersData(data);
                setUsers(parsedData);
            } else {
                openNotification(error || "Error happened, please try again later.");
            }
        })
    }

    const createUser = ({firstName: name, email, lastName: last_name}) => {
        createUserRequest({name, email, last_name}, (data) => {
           if (data.success) {
                getUsers();
            } else {
                openNotification(data.error || "Error happened, please try again later.");
            }
        });
        setShowForm(false);
    };

    const deleteUser = ({email}) => {
        deleteUserRequest(email, data => {
            if (data.success) {
                const newData = users.filter((item) => item.email !== email);
                setUsers(newData);
            } else {
                openNotification(data.error || "Error happened, please try again later.");
            }
        });
    };

    const toggleBlockStatus = ({email, value}) => {
        updateUserRequest({email, field_name: "is_blocked", value_name: value}, data => {
            if (data.success) {
                getUsers();
            } else {
                openNotification(data.error || "Error happened, please try again later.");
            }
        });
    }

    const resetPassword = ({email}) => {
        resetPasswordRequest(email, data => {
            if (!data.success) {
                openNotification(data.error || "Error happened, please try again later.");
            }
        })
    }

    const updateRule = (userItem) => {
        const {email, ipRule: rule} = userItem;
        if (!rule) return;
        updateUserRequest({email, field_name: "regex_ip", value_name: rule}, data => {
            if (data.success) {
                const newData = [...users];
                const index = newData.findIndex((item) => item.email === email);
                const item = newData[index];
        
                newData.splice(index, 1, {
                    ...item,
                    ...userItem,
                });
        
                setUsers(newData);
            } else {
                openNotification(data.error || "Error happened, please try again later.");
            }
        });
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
                        updateRule={updateRule}
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
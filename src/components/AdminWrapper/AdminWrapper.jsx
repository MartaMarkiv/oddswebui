import {
    Wrapper,
    HeaderPanel,
    TitlePage,
    TitleTable,
    AddUserButton
} from "./styles";
import { UsersTable } from "../usersTable";

export const AdminWrapper = () => {

    return (
        <Wrapper>
            <TitlePage>Admin</TitlePage>
            <HeaderPanel>
                <TitleTable>Users</TitleTable>
                <AddUserButton>Add user</AddUserButton>
            </HeaderPanel>
            <UsersTable></UsersTable>
        </Wrapper>
    )
}
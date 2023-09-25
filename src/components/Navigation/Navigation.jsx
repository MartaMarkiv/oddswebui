import { NavLink } from "react-router-dom";
import { logoutRequest } from "../../api/userRequests";
import { useCurrentUser } from "../../shared/context/UserProvider";
import  useAuthenticated from "../../shared/hooks/useAuthenticated";
import { MenuWrapper } from "./styles";

export const Navigation = () => {
    const { currentUser } = useCurrentUser();
    const { handleLogout } = useAuthenticated();

    const items = currentUser && currentUser.role === "admin" ? [
        {
            label: <NavLink to="/admin">Admin</NavLink>,
            key: 0,
        },
        {
            label: <div>Logout</div>,
            key: 1
        }
    ]:
    [
        {
            label: <div>Logout</div>,
            key: 1
        }
  ];

    const clickMenu = ({ key }) => {
        if (key === "1" && currentUser) {
            logoutRequest(currentUser.token, data => {
                // if (data.success) {
                    handleLogout();
                // }
            });
        }
    }
    return <MenuWrapper items={items} onClick={clickMenu} disabled={!currentUser || !currentUser.token}/>
}
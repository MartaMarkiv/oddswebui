import { useNavigate, NavLink } from "react-router-dom";
import { logoutRequest } from "../../api/userRequests";
import { useCurrentUser } from "../../shared/context/UserProvider";
import { MenuWrapper } from "./styles";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const Navigation = () => {
    const navigate = useNavigate();
    
    const { currentUser, setCurrentUser } = useCurrentUser();

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
                if (data.success) {
                    cookies.remove("userBenderToken", { path: '/' });
                    cookies.remove("userBenderRole", { path: '/' });
                    setCurrentUser(null);
                    navigate("/", { replace: true});
                }
            });
        }
    }
    return <MenuWrapper items={items} onClick={clickMenu}/>
}
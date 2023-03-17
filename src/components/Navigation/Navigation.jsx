import { Menu } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import { logoutRequest } from "../../api/userRequests";
import { useCurrentUser } from "../../shared/context/UserProvider";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

const items = [
    {
      label: <NavLink to="/admin">Admin</NavLink>,
      key: 0,
    },
    {
      label: <div>Logout</div>,
      key: 1
    }
  ];

export const Navigation = () => {
  const navigate = useNavigate();
  
  const { currentUser, setCurrentUser } = useCurrentUser();

  const clickMenu = ({ key }) => {
    if (key === "1" && currentUser) {
      logoutRequest(currentUser, data => {
        if (data.success) {
          cookies.remove("userBenderToken", { path: '/' });
          setCurrentUser(null);
          navigate("/", { replace: true});
        }
      });
    }
  }
    return <Menu items={items} onClick={clickMenu}/>
}
import { Menu } from "antd";
import { useNavigate, NavLink } from "react-router-dom";
import { logoutRequest } from "../../api/userRequests";
import { useCurrentUser } from "../../shared/context/UserProvider";

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
  console.log("USER: ", currentUser);

  const clickMenu = ({ key }) => {
    if (key === "1" && currentUser) {
      console.log("before lohout");
      logoutRequest(currentUser, data => {
        if (data.success) {
          console.log("DELETE COOKIE");
          document.cookie = "userToken=;";
          setCurrentUser(null);
          navigate("/", { replace: true});
        }
      });
    }
  }
    return <Menu items={items} onClick={clickMenu}/>
}
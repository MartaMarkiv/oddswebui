import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "../../api/userRequests";
import Cookies from "universal-cookie";
import { useCurrentUser } from "../../shared/context/UserProvider";

const items = [
    {
      label: <a href="/admin">Admin</a>,
      key: "0",
    },
    {
      label: <div>Logout</div>,
      key: "1"
    }
  ];

export const Navigation = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  
  const user = useCurrentUser();
  console.log("USER: ", user);

  const clickMenu = ({ key }) => {
    console.log(key);
    if (key === 1) {
      logoutRequest("", data => {
        if (data.success) {
          navigate("/", { replace: true});
          cookies.remove("token");
        }
      });
    }
  }
    return <Menu items={items} onClick={clickMenu}/>
}
import { Dropdown, Menu } from "antd";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MenuButton } from "./styles";
import { Navigation } from "../Navigation";

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

const menu = (<Menu items={items} />);

export const HeaderMenu = () => {

    return <Dropdown
      overlay={Navigation()}
      trigger={["click"]}
      placement="bottomRight"
	>
      <MenuButton><UserAvatar /></MenuButton>
  </Dropdown>
}
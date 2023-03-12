import { Dropdown, Menu } from "antd";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MenuButton } from "./styles";

const items = [
    {
		label: <a href="/admin">Admin</a>,
		key: "0",
    }
  ];

  const menu = (<Menu items={items} />);

export const HeaderMenu = () => {

    return <Dropdown
		overlay={menu}
		trigger={["click"]}
		placement="bottomRight"
	>
        <MenuButton><UserAvatar /></MenuButton>
  </Dropdown>
}
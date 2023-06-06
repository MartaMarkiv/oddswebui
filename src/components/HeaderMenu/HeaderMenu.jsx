import { Dropdown } from "antd";
import { UserAvatar } from "../UserAvatar/UserAvatar";
import { MenuButton } from "./styles";
import { Navigation } from "../Navigation";

export const HeaderMenu = () => {

    return <Dropdown
      overlay={Navigation()}
      trigger={["click"]}
      placement="bottomRight"
	>
      <MenuButton><UserAvatar /></MenuButton>
  </Dropdown>
}
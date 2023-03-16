import { ActionWrapper, Button, Title } from "./styles";
import {
    InteractionOutlined,
    DeleteOutlined,
    UnlockOutlined,
    LockOutlined
  } from "@ant-design/icons";

export const ActionBlock = ({title, type, action, data}) => {
    let ActionIcon = (<span></span>);
    switch (type) {
        case "unblocked":
            ActionIcon = (<LockOutlined className="userIcon" title="Block"/>)
            break;
        case "blocked":
            ActionIcon = (<UnlockOutlined className="userIcon" title="Unblock"/>)
            break;
        case "reset":
            ActionIcon = (<InteractionOutlined className="userIcon"/>)
            break;
        case "remove":
            ActionIcon = (<DeleteOutlined className="userIcon"/>)
            break;
        default:
            break;
    }
    return <ActionWrapper>
        {title && <Title>{title}</Title>}
        <Button
            onClick={()=> action(data)}
        >
            {ActionIcon}
        </Button>
    </ActionWrapper>
}
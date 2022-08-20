import {Spin} from "antd";
import {PendingScreenStyled} from "./styles";

export const PendingScreen = ({position}) => {

    return <PendingScreenStyled position={position}>
        <Spin />
    </PendingScreenStyled>
}
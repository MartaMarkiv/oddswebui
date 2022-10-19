import {Spin} from "antd";
import {PendingScreenStyled} from "./styles";

export const PendingScreen = ({position}) => {

    return <PendingScreenStyled className="spinner" position={position}>
        <Spin />
    </PendingScreenStyled>
}
import {Spin} from "antd";
import {LoadingBoxStyled, TextGroup} from "./styles";

export const LoadingRowsInfo = ({rows, isLoading}) => {
    return <LoadingBoxStyled>
        { rows > 0 &&
            <TextGroup>
                { !isLoading && <Spin /> }
            </TextGroup>
        }
    </LoadingBoxStyled>
}
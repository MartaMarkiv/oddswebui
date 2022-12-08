import {Spin} from "antd";
import {LoadingBoxStyled, Text, TextGroup} from "./styles";

export const LoadingRowsInfo = ({rows, isLoading}) => {
    return <LoadingBoxStyled>
        { rows > 0 &&
            <TextGroup>
                <Text>{rows} more rows</Text>
                { isLoading && <Spin /> }
            </TextGroup>
        }
    </LoadingBoxStyled>
}
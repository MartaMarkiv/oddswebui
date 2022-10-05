import {Row} from "antd";
import {v4 as uuidv4} from "uuid";
import {CellBoxStyled} from "./styles";

export const BetBox = ({data}) => {
    return <Row justify="center">
        { data.length ?
            data.map(d => {
                return <div key={uuidv4()}><CellBoxStyled status={d.status || 'default'}>{d.value}</CellBoxStyled></div>
            }) :
            <div key={uuidv4()}><CellBoxStyled status={'default'}>-</CellBoxStyled></div>
        }
    </Row>
}
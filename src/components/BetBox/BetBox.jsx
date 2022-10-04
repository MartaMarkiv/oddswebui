import {Row} from "antd";
import {v4 as uuidv4} from "uuid";
import {CellBoxStyled} from "./styles";

export const BetBox = ({data, selected}) => {
    return <Row justify="center">
        {data?.map(d => {
            const {book = '', value = '', betName = ''} = selected ?
                selected[d.key] :
                {book: '', value: ''};
            const selectedCell = value === d.value && book === d.book && betName === d.betName;

            return <div key={uuidv4()}>
                <CellBoxStyled
                    status={selectedCell ? 'success' : d.status || 'default'}
                >
                    {d.value}
                </CellBoxStyled>
            </div>
        })}
    </Row>
}
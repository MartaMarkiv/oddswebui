import {Row} from "antd";
import {v4 as uuidv4} from "uuid";
import {CellBoxStyled} from "./styles";
import {compareBets} from '../table/utils';

export const BetBox = ({data, selected, opportunities}) => {
    return <Row justify="center">
        {data?.map(d => {
            const isOpportunity = d && opportunities ? compareBets(opportunities, d) : false;
            // const {book = '', value = '', betName = ''} = selected ?
            //     selected[d.key] :
            //     {book: '', value: ''};
            // const selectedCell = value === d.value && book === d.book && betName === d.betName;

            return <div key={uuidv4()}>
                <CellBoxStyled
                    status={isOpportunity ? 'success' : d.status || 'default'}
                >
                    {d.value}
                </CellBoxStyled>
            </div>
        })}
    </Row>
}
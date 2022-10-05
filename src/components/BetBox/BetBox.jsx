import {Row} from "antd";
import {v4 as uuidv4} from "uuid";
import {CellBoxStyled} from "./styles";
import {compareBets} from '../table/utils';

export const BetBox = ({data, opportunities}) => {
    return <Row justify="center">
        { data.length ?
            data.map(d => {
                const isOpportunity = d && opportunities ? compareBets(opportunities, d) : false;
                return <div key={uuidv4()}>
                    <CellBoxStyled
                        status={isOpportunity ? 'success' : d.status || 'default'}
                    >
                        {d.value}
                    </CellBoxStyled>
                </div>
            }):
            <div key={uuidv4()}><CellBoxStyled status={'default'}>-</CellBoxStyled></div>
        }
    </Row>
}
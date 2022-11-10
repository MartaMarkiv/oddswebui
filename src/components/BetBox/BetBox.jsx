import {Row} from "antd";
import {v4 as uuidv4} from "uuid";
import {CellBoxStyled} from "./styles";
import {compareBets, isSelectedBet} from '../table/utils';

export const BetBox = ({data, opportunities, selectedBet}) => {
    return <Row justify="center">
        { data && data.length &&
            data.map(d => {
                const isOpportunity = d && opportunities ? compareBets(opportunities, d) : false;
                const isSelected = isSelectedBet(selectedBet, d);
                const status = isOpportunity ? 'success' : d.status || 'default';
                return <div key={uuidv4()}>
                    <CellBoxStyled
                        status={isSelected ? 'selected' : status}
                    >
                        {d.value}
                    </CellBoxStyled>
                </div>
            })
        }
    </Row>
}
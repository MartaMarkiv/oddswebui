import {Row} from "antd";
import {v4 as uuidv4} from "uuid";
import camelCase from 'lodash.camelcase';
import {CellBoxStyled} from "./styles";
import {compareBets, isSelectedBet, isSelectedRow} from '../table/utils';

export const BetBox = ({data, opportunities, selectedBet}) => {
    // console.log(data[0]);
    const rowName = data ? camelCase(`${data[0].game} - ${data[0].betName}`) : '';
    return <Row justify="center" className={`row-cell ${rowName}`}>
        { data && data.length &&
            data.map(d => {
                const isOpportunity = d && opportunities ? compareBets(opportunities, d) : false;
                const isSelected = isSelectedBet(selectedBet, d);
                const isSelectedGame = isSelectedRow(selectedBet, d);
                const status = isOpportunity ? 'success' : d.status || 'default';
                return <div
                    key={uuidv4()}
                    className={`${isSelectedGame ? 'selected' : 'cell'}`}
                    >
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
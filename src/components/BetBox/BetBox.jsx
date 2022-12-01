import {Row} from "antd";
import {v4 as uuidv4} from "uuid";
import camelCase from 'lodash.camelcase';
import {CellBoxStyled} from "./styles";
import {compareBets, isSelectedBet, isSelectedRow} from '../table/utils';

export const BetBox = ({data, opportunities, selectedBet}) => {
    const rowName = data ? camelCase(`${data[0].game} - ${data[0].betName}`) : '';
    const rowClassName = selectedBet && rowName === selectedBet.id ? 'selected-game-row' : 'row-game';
    return <Row justify="center" className={`row-cell ${rowName} ${rowClassName}`}>
        { data && data.length &&
            data.map(d => {
                const isOpportunity = d && opportunities ? compareBets(opportunities, d) : false;
                const isSelected = isSelectedBet(selectedBet, d);
                const isSelectedGame = isSelectedRow(selectedBet, d);
                const status = isOpportunity ? 'success' : d.status || 'default';
                return <div
                    key={uuidv4()}
                    className={`${isSelectedGame ? 'cell selected' : 'cell'}`}
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
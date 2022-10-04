import {Table} from "antd";
import React from 'react';
import {generateTableColumnData} from "./utils";
import {BetBox} from "../BetBox";
import {GameInfoBox} from "../GameInfoBox";
import {StyledBettingTable} from "./styles";
import {TableCell, TableRow, TableTh} from "./components";
import {FilterPanel} from "./components/FilterPanel";

export const BettingTable = ({ data, selectedRow }) => {

    const betRenderer = (data) => {
        return <BetBox data={data} />
    }

    const gameInfoRenderer = (_, data) => {
        return <GameInfoBox data={data} />
    }

    const columns = generateTableColumnData({
        data,
        betRenderer,
        gameInfoRenderer
    });

    const components = {
        header: {
            cell: TableTh
        },
        body: {
            row: TableRow,
            cell: TableCell,
        }
    };

    return <StyledBettingTable>
        <FilterPanel />
        <Table
            className="table-layout"
            columns={columns}
            rowClassName={(record) => {
                if(record.id === selectedRow.id) {
                    console.log(selectedRow.id);
                }
                return record.id === selectedRow.id ? 'data-row active-row' : 'data-row'}
            }
            dataSource={data}
            sticky={true}
            rowKey="id"
            bordered
            scroll={{ x: window.innerWidth }}
            size="middle"
            components={components}
        />
    </StyledBettingTable>
};
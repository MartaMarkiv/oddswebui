import {Table} from "antd";
import React from 'react';
import {generateTableColumnData} from "./utils";
import {BetBox} from "../BetBox";
import {GameInfoBox} from "../GameInfoBox";
import {LoadingRowsInfo} from "../LoadingRowsInfo";
import {StyledBettingTable} from "./styles";
import {TableCell, TableRow, TableTh} from "./components";

export const BettingTable = ({
    data,
    opportunities,
    selectedRow,
    countRows,
    loadingRows
}) => {
    const betRenderer = (data) => {
        return <BetBox data={data} opportunities={opportunities} selectedBet={selectedRow}/>
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
        <Table
            className="table-layout"
            columns={columns}
            dataSource={data}
            sticky={true}
            rowKey="id"
            bordered
            scroll={{ x: window.innerWidth }}
            pagination={false}
            size="middle"
            components={components}
        />
        <LoadingRowsInfo rows={countRows} isLoading={loadingRows} />
    </StyledBettingTable>
};
import {Table} from "antd";
import React from 'react';
import {generateTableColumnData} from "./utils";
import {BetBox} from "../BetBox";
import {GameInfoBox} from "../GameInfoBox";
import {BetTypeBox} from "../BetTypeBox";
import {StyledBettingTable} from "./styles";
import {TableCell, TableRow, TableTh} from "./components";
import {FilterPanel} from "./components/FilterPanel";

export const BettingTable = ({
    data,
    opportunities,
    sportsBooks,
    changeBook,
    changeQuarter,
    selectedQuarters,
    sportsTypes,
    changeSport,
    selectedRow
}) => {
    const betRenderer = (data) => {
        return <BetBox data={data} opportunities={opportunities} selectedBet={selectedRow}/>
    }

    const gameInfoRenderer = (_, data) => {
        return <GameInfoBox data={data} />
    }

    const betTypeRenderer = (_, data) => <BetTypeBox data={data} />

    const columns = generateTableColumnData({
        data,
        betRenderer,
        gameInfoRenderer,
        betTypeRenderer
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
        <FilterPanel
            sportsBooks={sportsBooks}
            changeBook={changeBook}
            changeQuarter={changeQuarter}
            quarters={selectedQuarters}
            sports={sportsTypes}
            changeSport={changeSport}
        />
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
    </StyledBettingTable>
};
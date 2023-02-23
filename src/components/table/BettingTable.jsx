import {Table} from "antd";
import React from 'react';
import {generateTableColumnData} from "./utils";
import {BetBox} from "../BetBox";
import {GameInfoBox} from "../GameInfoBox";
import {LoadingRowsInfo} from "../LoadingRowsInfo";
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
    selectedRow,
    countRows,
    loadingRows,
    betsTypes,
    changeBets,
    games,
    selectGame,
    isOpenFilter,
    toggleFilter,
    isTable,
    isProp,
    isPopular
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
        {/* <FilterPanel
            sportsBooks={sportsBooks}
            changeBook={changeBook}
            changeQuarter={changeQuarter}
            quarters={selectedQuarters}
            sports={sportsTypes}
            changeSport={changeSport}
            betsTypes={betsTypes}
            changeBets={changeBets}
            games={games}
            changeGame={selectGame}
            isOpenFilter={isOpenFilter}
            toggleFilter={toggleFilter}
        /> */}
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
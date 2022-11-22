import {Table} from "antd";
import React from 'react';
import {generateTableColumnData} from "./utils";
import {BetBox} from "../BetBox";
import {GameInfoBox} from "../GameInfoBox";
import {StyledBettingTable} from "./styles";
import {TableCell, TableRow, TableTh} from "./components";
import {FilterPanel} from "./components/FilterPanel";
import InfiniteScroll from 'react-infinite-scroll-component';

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
    loadMoreData,
    hasMore
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
        <FilterPanel
            sportsBooks={sportsBooks}
            changeBook={changeBook}
            changeQuarter={changeQuarter}
            quarters={selectedQuarters}
            sports={sportsTypes}
            changeSport={changeSport}
        />
        <InfiniteScroll
            dataLength={data.length}
            next={loadMoreData}
            hasMore={hasMore}
            loader={<h4>Loading more 2 itens...</h4>}
        >
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
        </InfiniteScroll>
        
    </StyledBettingTable>
};
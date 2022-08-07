import {Table} from "antd";
import React from 'react';
import styled from 'styled-components';
import {generateTableColumnData} from "./utils";
import {TableRow, TableCell, TableTh} from "./components";
import {BetBox} from "../BetBox";

const StyledBettingTable = styled.div`
  .ant-table {
    background: ${({ theme }) => theme.colors.bgBody};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  &&& {
    .ant-table-container,
    .ant-table-container table {
      border-color: ${({ theme }) => theme.colors.table.border};
    }
  }
`;

export const BettingTable = ({ data }) => {

    const betRenderer = (data) => {
        return <BetBox data={data} />
    }

    const columns = generateTableColumnData({
        data,
        betRenderer
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
            columns={columns}
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
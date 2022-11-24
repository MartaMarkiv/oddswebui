import {capitalizeFirst} from "../../../utils/capitalizeFirst";
import {v4 as uuidv4} from "uuid";

export const generateTableColumnData = ({data, betRenderer, gameInfoRenderer, betTypeRenderer}) => {
    const initialColumns = [];

    if(data && data.length) {

        const gameColumn = {
            title: 'Sports book',
            key: 'sportsBook',
            align: 'left',
            className: 'tableHead cellShadow sportsBookCell',
            fixed: true,
            children: [
                {
                    dataIndex: 'game',
                    key: 'game',
                    width: 130,
                    colSpan: 2,
                    title: 'Bet type',
                    align: 'left',
                    fixed: true,
                    className: 'tableHead cellShadow gameCell',
                    onCell: (record, index) => {
                        if (record.isDisplayName) {
                            return {
                                rowSpan: record.countBetTypes,
                            };
                        }

                        return {
                            rowSpan: 0,
                        }
                    },
                    render: gameInfoRenderer,
                },
                {
                    dataIndex: 'betType',
                    key: 'betTypeValue',
                    className: 'betTypeCell cellShadow',
                    fixed: true,
                    width: 140,
                    colSpan: 0,
                    render: betTypeRenderer
                }
            ]
        }

        const books  = [...new Set(data.map(d => Object.keys(d.books)).flat())];

        const booksCount = books.length;
        const bookColumns = books.map((key, index) => ({
            title: capitalizeFirst(key),
            key: `${key}_${uuidv4()}`,
            className: 'bookHeader',
            align: 'center',
            children: [
                {
                    title: 'Home',
                    className: `subBookHeader tableHead odd ${index === 0 ? 'first' : ''}`,
                    width: 96,
                    key: `${key}Home_${uuidv4()}`,
                    align: 'center',
                    dataIndex: ['books', key, 'bets', 'home'],
                    render: betRenderer,
                },
                {
                    title: 'Away',
                    className: `subBookHeader tableHead ${index === booksCount - 1 ? 'last' : ''}`,
                    width: 96,
                    align: 'center',
                    key: `${key}Away_${uuidv4()}`,
                    dataIndex: ['books', key, 'bets', 'away'],
                    render: betRenderer,
                }
            ]
        }))

        initialColumns.push(gameColumn)
        initialColumns.push(...bookColumns)

        return initialColumns
    } else {
        return initialColumns;
    }
}
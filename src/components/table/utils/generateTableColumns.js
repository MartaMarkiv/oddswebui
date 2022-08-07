import {capitalizeFirst} from "../../../utils/capitalizeFirst";
import {v4 as uuidv4} from "uuid";

export const generateTableColumnData = ({data, betRenderer}) => {
    const initialColumns = [];

    if(data && data.length) {
        const betTypes  = [...new Set(data.map(d => d.betType))];

        const gameColumn = {
            title: 'Sports book',
            key: 'sportsBook',
            align: 'left',
            fixed: true,
            children: [
                {
                    dataIndex: 'game',
                    key: 'game',
                    width: 129,
                    colSpan: 2,
                    title: 'Bet type',
                    align: 'left',
                    fixed: true,
                    onCell: (_, index) => {
                        if (index % betTypes.length === 0) {
                            return {
                                rowSpan: betTypes.length,
                            };
                        }

                        return {
                            rowSpan: 0,
                        }
                    }
                },
                {
                    dataIndex: 'betType',
                    key: 'betTypeValue',
                    fixed: true,
                    width: 138,
                    colSpan: 0,
                }
            ]
        }

        const books  = [...new Set(Object.keys(...data.map(d => d.books)))];

        const bookColumns = books.map(key => ({
            title: capitalizeFirst(key),
            key: `${key}_${uuidv4()}`,
            className: 'bookHeader',
            align: 'center',
            children: [
                {
                    title: 'Home',
                    className: 'subBookHeader',
                    key: `${key}Home_${uuidv4()}`,
                    align: 'center',
                    dataIndex: ['books', key, 'bets', 'home'],
                    render: betRenderer,
                },
                {
                    title: 'Away',
                    className: 'subBookHeader',
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
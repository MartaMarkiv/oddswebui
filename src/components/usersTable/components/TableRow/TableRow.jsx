import {Tr} from "./styles";

export const TableRow = (props) => {
    return <Tr {...props} className={props['data-row-key']?.split('|').includes('first') && 'firstRow'} />
}
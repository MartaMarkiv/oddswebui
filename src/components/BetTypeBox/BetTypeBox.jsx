import {BetTypeBoxStyled, Text, BetTypeGroup, Team} from "./styles";

export const BetTypeBox = ({data}) => {
    const {betType} = data;
    return <BetTypeBoxStyled>
        <Text>{betType}</Text>
        <BetTypeGroup>
            <Team>Home</Team>
            <Team>Away</Team>
        </BetTypeGroup>
    </BetTypeBoxStyled>
}
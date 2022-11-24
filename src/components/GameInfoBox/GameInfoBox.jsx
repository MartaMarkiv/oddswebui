import {GameInfoBoxStyled, Text, TextSecondary, TimeGroup, GameName} from "./styles";
import {TimeoutBadge} from "../TimeoutBadge";

export const GameInfoBox = ({data}) => {
    const {game, type, id, time, timeout} = data;
    return <GameInfoBoxStyled>
        <GameName>{game}</GameName>
        <TimeGroup>
            <TextSecondary>Time remaining</TextSecondary>
            <Text>{time}</Text>
            {!!(+timeout) && <TimeoutBadge/>}
        </TimeGroup>
    </GameInfoBoxStyled>
}
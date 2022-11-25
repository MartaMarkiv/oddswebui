import {GameInfoBoxStyled, Text, TextSecondary, TimeGroup, GameName, GameNameGroup} from "./styles";
import {TimeoutBadge} from "../TimeoutBadge";

export const GameInfoBox = ({data}) => {
    const {game, type, id, time, timeout} = data;
    const [awayTeam, homeTeam] = game.indexOf('@') >= 0 ? game.split('@') : game.split(' v ');
    return <GameInfoBoxStyled>
        <TimeGroup>
            <TextSecondary>Time remaining</TextSecondary>
            <Text>{time}</Text>
            {!!(+timeout) && <TimeoutBadge/>}
        </TimeGroup>
        <GameNameGroup>
            <GameName>{awayTeam}</GameName>
            <GameName>@</GameName>
            <GameName>{homeTeam}</GameName>
        </GameNameGroup>
    </GameInfoBoxStyled>
}
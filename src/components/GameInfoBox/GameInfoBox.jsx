import {GameInfoBoxStyled, Text, TextSecondary, TimeGroup} from "./styles";
import {TimeoutBadge} from "../TimeoutBadge";
import {TeamLogoGroup} from "../TeamLogo";

export const GameInfoBox = ({data}) => {
    const {game, type, id, time, timeout} = data;
    return <GameInfoBoxStyled>
        <TeamLogoGroup size={42} urls={['team1.png', 'team2.png']} />
        <TimeGroup>
            <TextSecondary>Time remaining</TextSecondary>
            <Text>{time}</Text>
        </TimeGroup>
        {!!(+timeout) && <TimeoutBadge/>}
    </GameInfoBoxStyled>
}
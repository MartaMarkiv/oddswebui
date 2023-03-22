import {ReactComponent as HomeIcon} from '../../../assets/icons/home.svg';
import {ReactComponent as AwayIcon} from '../../../assets/icons/away.svg';

import {
    Body, GridBody, GridHead,
    GridRow,
    GridTd, GridTh,
    Header,
    HeaderRightContent,
    OpportunityItemContainer,
    TeamBadge,
    TeamName,
    Teams,
    Grid,
    Group,
    Divider,
    GameTime
} from "./styles";
import {TimeoutBadge} from "../../TimeoutBadge";

export const OpportunityItem = ({ data }) => {

    const isHigh =  data.opportunity ? data.sumProbability > 0 : false;
    return <OpportunityItemContainer isHigh={isHigh}>
        <Header>
            <Teams>
                <TeamName>
                    <TeamBadge>
                        <AwayIcon/>
                    </TeamBadge>
                    {data.awayTeam}
                </TeamName>
                <TeamName>
                    <TeamBadge>
                        <HomeIcon/>
                    </TeamBadge>
                    {data.homeTeam}
                </TeamName>
            </Teams>
            <HeaderRightContent>
                {
                    data.timeout && <TimeoutBadge size="small"/>
                }
                <GameTime>{data.gameTime}</GameTime>
                {/* <TeamLogoGroup urls={['team1.png', 'team2.png']}/> */}
            </HeaderRightContent>
        </Header>
        <Body>
            <Grid>
                <GridHead>
                    <GridRow>
                        <GridTh>Bet name</GridTh>
                        <GridTh>Bet type</GridTh>
                        <GridTh>Value</GridTh>
                        <GridTh>Sports book</GridTh>
                    </GridRow>
                </GridHead>

                <GridBody>
                    {
                        data?.opportunity && Object.keys(data.opportunity).map((key, index) => {
                            
                            const bets = data.opportunity[key].items.slice().reverse();
                            return <div key={index}>
                                {
                                    index > 1 && <Divider />
                                }

                                <Group>
                                    {
                                        bets.map((opportunity, i) => {
                                            return <GridRow key={i}>
                                                <GridTd>{opportunity.betName}</GridTd>
                                                <GridTd>{opportunity.typeValue}</GridTd>
                                                <GridTd isValue>{opportunity.value}</GridTd>
                                                <GridTd>{opportunity.sportBook}</GridTd>
                                            </GridRow>
                                        })
                                    }
                                    <div>EV: {data.sumProbability}</div>
                                </Group>
                            </div>
                        })
                    }
                </GridBody>
            </Grid>
        </Body>
    </OpportunityItemContainer>
}
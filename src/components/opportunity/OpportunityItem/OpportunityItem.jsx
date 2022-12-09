import {ReactComponent as HomeIcon} from '../../../assets/icons/home.svg';
import {ReactComponent as AwayIcon} from '../../../assets/icons/away.svg';
import {useCallback} from "react";

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
    Grid, Group, Divider
} from "./styles";
import {TimeoutBadge} from "../../TimeoutBadge";
import {TeamLogoGroup} from "../../TeamLogo";

export const OpportunityItem = ({onSelect, data, selected}) => {

    const groupSelectHandler = useCallback(({id, items}) => {
        if (selected === id) {
            onSelect(null);
        } else {
            const [homeItem, awayItem] = items;
            const {sportBook: homeBook, value: homeValue, name: homeBetName} = homeItem;
            const {sportBook: awayBook, value: awayValue, name: awayBetName} = awayItem;

            onSelect({
                id,
                home: {
                    value: homeValue,
                    book: homeBook,
                    betName: homeBetName
                },
                away: {
                    value: awayValue,
                    book: awayBook,
                    betName: awayBetName
                }
            });
        }
    }, [selected, onSelect]);

    const keys = data.opportunity ? Object.keys(data.opportunity).map(key => data.opportunity[key].id) : []

    const betKey = data.opportunity ? Object.keys(data.opportunity) : [];

    const isHigh =  data.opportunity ? data.opportunity[betKey[0]].sumProbability > 0 : false;
    return <OpportunityItemContainer selected={keys.includes(selected)} isHigh={isHigh}>
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

                                <Group selected={selected === data.opportunity[key].id}
                                       onClick={(event) => groupSelectHandler(data.opportunity[key])}>
                                    {
                                        bets.map((opportunity, i) => {
                                            let typeValue = opportunity.type;
                                            let opporunityName = opportunity.name;
                                            switch (opportunity.name) {
                                                case 'Spread':
                                                    typeValue = `${opportunity.type} ${opportunity.typeValue}`;
                                                    opporunityName = `${opportunity.isProp === 1 ? 'Alternate' : 'Popular'} ${opportunity.name}`
                                                    break;
                                                case 'Total':
                                                    typeValue = opportunity.typeValue;
                                                    opporunityName = `${opportunity.isProp === 1 ? 'Alternate' : 'Popular'} ${opportunity.name}`
                                                    break;
                                                default:
                                                    typeValue = opportunity.type;
                                                    break;
                                            }
                                            return <GridRow key={i}>
                                                <GridTd>{opporunityName}</GridTd>
                                                <GridTd>{typeValue}</GridTd>
                                                <GridTd isValue>{opportunity.value}</GridTd>
                                                <GridTd>{opportunity.sportBook}</GridTd>
                                            </GridRow>
                                        })
                                    }
                                    <div>Sum probability: {data.opportunity[key].sumProbability}</div>
                                </Group>
                            </div>
                        })
                    }
                </GridBody>
            </Grid>
        </Body>
    </OpportunityItemContainer>
}
import {ReactComponent as HomeIcon} from '../../../assets/icons/home.svg';
import {ReactComponent as AwayIcon} from '../../../assets/icons/away.svg';
import {useCallback, useState} from "react";

import {
    Arrow, Body, GridBody, GridHead,
    GridRow,
    GridTd, GridTh,
    Header,
    HeaderRightContent,
    OpportunityItemContainer,
    TeamBadge,
    TeamName,
    Teams,
    Toggle,
    Grid, Group, Divider
} from "./styles";
import {TimeoutBadge} from "../../TimeoutBadge";
import {TeamLogoGroup} from "../../TeamLogo";


const INITIAL_ROW_COUNT = 1;

export const OpportunityItem = ({onSelect, data, selected}) => {
    const [showRowCount, setShowRowCount] = useState(INITIAL_ROW_COUNT);
    const [isOpened, setIsOpened] = useState(false);

    const toggle = (event) => {
        event.stopPropagation();
        setIsOpened(!isOpened);
        setShowRowCount(isOpened ? INITIAL_ROW_COUNT : Object.keys(data.opportunities).length)
    }

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

    const keys = data.opportunities ? Object.keys(data.opportunities).map(key => data.opportunities[key].id) : []

    return <OpportunityItemContainer selected={keys.includes(selected)}>
        <Header>
            <Teams>
                <TeamName>
                    <TeamBadge>
                        <HomeIcon/>
                    </TeamBadge>
                    {data.homeTeam}
                </TeamName>
                <TeamName>
                    <TeamBadge>
                        <AwayIcon/>
                    </TeamBadge>
                    {data.awayTeam}
                </TeamName>
            </Teams>
            <HeaderRightContent>
                {
                    data.timeout && <TimeoutBadge size="small"/>
                }
                <TeamLogoGroup urls={['team1.png', 'team2.png']}/>
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
                        data?.opportunities && Object.keys(data.opportunities).slice(0, showRowCount).map((key, index) => {
                            return <div key={index}>
                                {
                                    index > 1 && <Divider />
                                }

                                <Group selected={selected === data.opportunities[key].id}
                                       onClick={(event) => groupSelectHandler(data.opportunities[key])}>
                                    {
                                        data.opportunities[key].items.map((opportunity, i) =>
                                            <GridRow key={i}>
                                                <GridTd>{opportunity.name}</GridTd>
                                                <GridTd>{opportunity.type}</GridTd>
                                                <GridTd isValue>{opportunity.value}</GridTd>
                                                <GridTd>{opportunity.sportBook}</GridTd>
                                            </GridRow>
                                        )
                                    }
                                </Group>
                                {
                                    index === 0 && Object.keys(data.opportunities).length > 1 &&
                                    <Toggle key="some" onClick={toggle} opened={isOpened}>
                                        {isOpened ? 'Hide other' : 'Show other'}
                                        <Arrow opened={isOpened ? 1 : 0}/>
                                    </Toggle>
                                }
                            </div>
                        })
                    }
                </GridBody>
            </Grid>
        </Body>
    </OpportunityItemContainer>
}
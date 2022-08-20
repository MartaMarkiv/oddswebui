import { ReactComponent as HomeIcon } from '../../../assets/icons/home.svg';
import { ReactComponent as AwayIcon } from '../../../assets/icons/away.svg';
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
    Grid
} from "./styles";
import {TimeoutBadge} from "../../TimeoutBadge";
import {TeamLogoGroup} from "../../TeamLogo";


const INITIAL_ROW_COUNT = 2;

const GridRowComponent = ({item, index, toggle, isOpened, len}) => {
    if(index === 1) {
        return <>
            <GridRowComponent item={item}/>
            {len > 2 && <Toggle onClick={toggle} opened={isOpened}>
                {isOpened ? 'Hide other' : 'Show other'}
                <Arrow opened={isOpened ? 1 : 0} />
            </Toggle>}
        </>
    }

    return <GridRow>
        <GridTd>{item.name}</GridTd>
        <GridTd>{item.type}</GridTd>
        <GridTd isValue>{item.value}</GridTd>
        <GridTd>{item.sportBook}</GridTd>
    </GridRow>
}

export const OpportunityItem = ({onSelect, data, selected}) => {
    const [showRowCount, setShowRowCount] = useState(INITIAL_ROW_COUNT);
    const [isOpened, setIsOpened] = useState(false);

    const toggle = (event) => {
        event.stopPropagation();
        setIsOpened(!isOpened);
        setShowRowCount(isOpened ? INITIAL_ROW_COUNT : data.length)
    }

    const selectOpportunity = useCallback((opportunity) => {
        if(selected === opportunity.id) {
            onSelect()
        } else {
            onSelect(opportunity.id)
        }
    }, [selected, onSelect]);

    return <OpportunityItemContainer selected={selected === data.id} onClick={() => selectOpportunity(data)}>
        <Header>
            <Teams>
                <TeamName>
                    <TeamBadge>
                        <HomeIcon />
                    </TeamBadge>
                    {data.homeTeam}
                </TeamName>
                <TeamName>
                    <TeamBadge>
                        <AwayIcon />
                    </TeamBadge>
                    {data.awayTeam}
                </TeamName>
            </Teams>
            <HeaderRightContent>
                {
                    data.timeout && <TimeoutBadge size="small" />
                }
                <TeamLogoGroup urls={['team1.png', 'team2.png']} />
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
                        data?.opportunities?.slice(0, showRowCount).map((item, index) =>
                            <GridRowComponent key={item.id}
                                              item={item}
                                              index={index}
                                              len={data?.opportunities.length}
                                              toggle={toggle}
                                              isOpened={isOpened} />
                        )
                    }
                </GridBody>
            </Grid>
        </Body>
    </OpportunityItemContainer>
}
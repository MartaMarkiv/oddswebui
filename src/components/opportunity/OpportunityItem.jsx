import styled from "styled-components";
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as AwayIcon } from '../../assets/icons/away.svg';
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';
import {TeamLogoGroup} from "../TeamLogoGroup";
import {TimeoutBadge} from "../TimeoutBadge";
import {useCallback, useState} from "react";

const OpportunityItemContainer = styled.div`
  background: ${({theme}) => theme.colors.bgBody};
  border-radius: 4px;
  padding: 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({theme}) => theme.colors.textPrimary};
  cursor: pointer;
  
  ${({selected, theme}) => {
    return selected ? {
        background: theme.colors.bgContrast,
        color: theme.colors.textContrast,
      } : {}
  }};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


const Teams = styled.div`
  display: flex;
  flex-direction: column;
`;

const TeamName = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const TeamBadge = styled.div`
  width: 13px;
  height: 14px;
  background: #DFE5EB;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
`;

const HeaderRightContent = styled.div`
  display: flex;
  align-items: center;
  
  > *:first-child {
    margin-right: 12px;
  }
`;

const Body = styled.div``;

const Grid = styled.div`
    margin-top: 22px;
`;

const GridHead = styled.div`
  margin-bottom: 8px;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1.5fr;
`;

const GridTh = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: ${({theme}) => theme.colors.opportunity.textSecondary};
`;

const GridBody = styled.div``;

const GridTd = styled.div`
  font-style: normal;
  font-size: 14px;
  color: ${({theme, isValue}) => isValue ? theme.colors.textSuccess : 'inherit'};
  font-weight: ${({isValue}) => isValue ? 500 : 400};
`;

const Toggle = styled(GridTh)`
  cursor: pointer;
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  user-select: none;

  ${({opened}) => {
      if(opened) {
          return {
            marginBottom: '13px'
          } 
      }
  }}; 
`;

const Arrow = styled(ArrowIcon)`
  transition: transform 0.2s ease-in;
  margin-left: 8px;
  margin-top: -2px;
  
  ${({opened}) => {
    if(opened) {
      return {
        transform: 'rotate(-180deg)'
      }
    }
  }};
`;


const INITIAL_ROW_COUNT = 2;

const mockData = [{
    id: "1",
    type: "Home",
    name: "Moneyline",
    value: "+300",
    book: "Fanduel"
}, {
    id: "2",
    type: "Home",
    name: "Moneyline",
    value: "-355",
    book: "Points bet"
}, {
    id: "3",
    type: "Home",
    name: "Moneyline",
    value: "-300",
    book: "Fanduel"
}, {
    id: "4",
    type: "Home",
    name: "Moneyline",
    value: "-355",
    book: "Points bet"
}]

const GridRowComponent = ({item, index, toggle, isOpened}) => {
    if(index === 1) {
        return <>
            <GridRowComponent item={item}/>
            <Toggle onClick={toggle} opened={isOpened}>
                {isOpened ? 'Hide other' : 'Show other'}
                <Arrow opened={isOpened ? 1 : 0} />
            </Toggle>
        </>
    }

    return <GridRow>
        <GridTd>{item.name}</GridTd>
        <GridTd>{item.type}</GridTd>
        <GridTd isValue>{item.value}</GridTd>
        <GridTd>{item.book}</GridTd>
    </GridRow>
}

export const OpportunityItem = ({onSelect, data, selected}) => {
    data['opportunity'] = mockData;

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
                    Burnley
                </TeamName>
                <TeamName>
                    <TeamBadge>
                        <AwayIcon />
                    </TeamBadge>
                    Arsenal
                </TeamName>
            </Teams>
            <HeaderRightContent>
                <TimeoutBadge size="small" />
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
                        data?.opportunity?.slice(0, showRowCount).map((item, index) =>
                            <GridRowComponent key={item.id} item={item} index={index} toggle={toggle} isOpened={isOpened} />
                        )
                    }
                </GridBody>
            </Grid>
        </Body>
    </OpportunityItemContainer>
}
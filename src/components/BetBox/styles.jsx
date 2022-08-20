import styled from "styled-components";
import {ReactComponent as ArrowIcon} from "*.svg";

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
  grid-template-columns: 1.8fr 1fr 1fr 1.5fr;
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

export {
    OpportunityItemContainer,
    Header,
    Teams,
    TeamName,
    Arrow,
    Toggle,
    GridTd,
    GridBody,
    GridTh,
    GridRow,
    GridHead,
    Grid,
    Body,
    HeaderRightContent,
    TeamBadge,
}
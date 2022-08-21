import styled from "styled-components";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow.svg";

const OpportunityItemContainer = styled.div`
  background: ${({theme}) => theme.colors.bgBody};
  border-radius: 4px;
  padding: 16px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({theme}) => theme.colors.textPrimary};
  cursor: pointer;
  background: ${({theme}) => theme.colors.drawer.itemBg};
  transition: all .3s;
  
  &:hover {
    background: ${({theme}) => theme.colors.drawer.itemBgSelected};
    color: ${({theme}) => theme.colors.drawer.textSelected};,
  }
  
  ${({selected, theme}) => {
    return selected ? {
        background: theme.colors.drawer.itemBgSelected,
        color: theme.colors.drawer.textSelected,
    } : {}
}};
`;

const Group = styled.div`
  padding: 7px 9px;
  border-radius: 4px;
  transition: background .3s;

  &:hover {
    background: ${({theme}) => theme.colors.drawer.groupBgSelected};
  }

  ${({selected, theme}) => {
    return selected ? {
      background: theme.colors.drawer.groupBgSelected,
    } : {}
  }};
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
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

const Body = styled.div`
  padding-left: 7px;
  padding-right: 7px;
`;

const Grid = styled.div`
    margin-top: 22px;
`;

const GridHead = styled.div`
  margin-bottom: 3px;
  padding-left: 9px;
  padding-right: 9px;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
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
  margin-left: 9px;

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

const Divider = styled.div`
  height: 1px;
  width: calc(100% - 18px);
  margin: 0 auto;
  background: #2d2d2d;
`

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
    Group,
    Divider,
}
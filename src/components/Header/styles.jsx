import styled from "styled-components";
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import {ReactComponent as FilterIcon} from '../../assets/icons/filter.svg';

const HeaderStyled = styled.header`
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
  position: relative;
`

const LogoLink = styled.a`
  width: 175px;
  height: 48px;
  display: block;
  color: ${({theme}) => theme.colors.logo};
  
  &:hover {
    color: ${({theme}) => theme.colors.logo};
  }
`

const LogoImage = styled(Logo)`
  width: 100%;
  height: 100%;
`;

const HeaderControlPanel = styled.div`
  display: flex;
  align-items: center;

  > *:first-child {
    margin-right: 24px;
  }

  > *:nth-child(3) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const FilterButton = styled.button`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 100%;
  background: ${({theme}) => theme.colors.headerControls.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  
  path {
    stroke: ${({theme}) => theme.colors.headerControls.starStroke};
    fill: ${({theme}) => theme.colors.headerControls.starBg};
  }

  &:hover {
    color: ${({theme}) => theme.colors.headerControls.bg};
    background: ${({theme}) => theme.colors.textPrimary};
    path {
      stroke: ${({theme}) => theme.colors.headerControls.bg};
    } 
  }

  &:disabled {
    cursor: default;
  }
`;

const FilterImage = styled(FilterIcon)`
  width: 20px;
  height: 20px;
`;

export {
    HeaderStyled,
    LogoLink,
    LogoImage,
    HeaderControlPanel,
    FilterButton,
    FilterImage
}

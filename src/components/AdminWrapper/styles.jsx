import styled from "styled-components";
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import {ReactComponent as FilterIcon} from '../../assets/icons/filter.svg';

const Wrapper = styled.div`
position: relative;
`;

const TitlePage = styled.div`
  width: 175px;
  height: 48px;
  display: block;
  color: ${({theme}) => theme.colors.logo};
`;

const TitleTable = styled.div`
  width: 175px;
  height: 48px;
  display: block;
  color: ${({theme}) => theme.colors.logo};
`

const LogoImage = styled(Logo)`
  width: 100%;
  height: 100%;
`;

const HeaderPanel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  h2 {
    margin-bottom: 0;
  }
`;

const FilterImage = styled(FilterIcon)`
  width: 20px;
  height: 20px;
`;

const AddUserButton = styled.button`
  background: ${({theme}) => theme.colors.headerControls.bg};
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: 16px;
  border-radius: 20px;
  border: none;
  padding: 5px 15px;
  margin-left: 20px;
  cursor: pointer;
`

export {
  Wrapper,
  HeaderPanel,
  TitlePage,
  AddUserButton,
  TitleTable
}

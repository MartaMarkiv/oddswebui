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
`;

const FilterImage = styled(FilterIcon)`
  width: 20px;
  height: 20px;
`;

const AddUserButton = styled.button`
`

export {
  Wrapper,
  HeaderPanel,
  TitlePage,
  AddUserButton,
  TitleTable
}

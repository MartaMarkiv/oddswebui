import styled from "styled-components";
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

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

  > *:first-child {
    margin-right: 24px;
  }

  > *:nth-child(3) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export {
    HeaderStyled,
    LogoLink,
    LogoImage,
    HeaderControlPanel
}

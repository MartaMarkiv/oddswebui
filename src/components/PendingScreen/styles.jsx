import styled from "styled-components";
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const HeaderStyled = styled.header`
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 auto;
`

const LogoLink = styled.a`
  width: 175px;
  height: 48px;
  display: block;
  color: ${({theme}) => theme.colors.logo};
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

  > *:last-child {
    margin-left: 24px;
  }
`;

export {
    HeaderStyled,
    LogoLink,
    LogoImage,
    HeaderControlPanel
}
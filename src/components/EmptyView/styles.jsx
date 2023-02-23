import styled from "styled-components";
import {ReactComponent as SettingsIcon} from '../../assets/icons/filter.svg';

const ViewWrapper = styled.div`
  margin-bottom: 150px;
`

const Title = styled.div`
  font-weight: 400;
  font-size: 20px;
  color: ${({theme}) => theme.colors.textPrimary};
  display: flex;
  align-items: center;
`;


const SettingsImage = styled(SettingsIcon)`
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;

const Wrapper = styled.div`
display: inline;
width: 20px;
height: 20px;
border-radius: 100%;
background: ${({theme}) => theme.colors.headerControls.bg};
`

export {
  ViewWrapper,
  Title,
  SettingsImage,
  Wrapper
}

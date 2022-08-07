import {TeamLogo} from "./TeamLogo";
import styled from "styled-components";

const TeamLogoGroupContainer = styled.div`
  display: flex;

  > * {
    :first-child {
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
      margin-right: -7px;
      z-index: 2;
    }

    :last-child {
      border: 1px solid #DFE5EB;
    } 
  }
`;

export const TeamLogoGroup = ({urls = []}) => {
    return <TeamLogoGroupContainer>
        { urls.map(url => <TeamLogo key={url} imgUrl={url} />) }
    </TeamLogoGroupContainer>
}
import {TeamLogo} from "./TeamLogo";
import {TeamLogoGroupContainer} from "./styles";

export const TeamLogoGroup = ({urls = [], size}) => {
    return <TeamLogoGroupContainer>
        { urls.map(url => <TeamLogo size={size} key={url} imgUrl={url} />) }
    </TeamLogoGroupContainer>
}
import {Image, TeamLogoContainer} from "./styles";

export const TeamLogo = ({imgUrl, size = 32}) => {
    return <TeamLogoContainer size={size}>
        <Image src={imgUrl} alt={imgUrl}/>
    </TeamLogoContainer>
}
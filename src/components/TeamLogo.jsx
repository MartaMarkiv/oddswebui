import styled from "styled-components";

const TeamLogoContainer = styled.div`
  width: 32px;
  height: 32px;
  background: #FFFFFF;
  border: 1px solid #FFFFFF;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  display: block;
`;

export const TeamLogo = ({imgUrl}) => {
    return <TeamLogoContainer>
        <Image src={imgUrl} alt={imgUrl}/>
    </TeamLogoContainer>
}
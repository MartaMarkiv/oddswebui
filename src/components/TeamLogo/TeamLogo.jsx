import styled from "styled-components";

const TeamLogoContainer = styled.div`
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
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

export const TeamLogo = ({imgUrl, size = 32}) => {
    return <TeamLogoContainer size={size}>
        <Image src={imgUrl} alt={imgUrl}/>
    </TeamLogoContainer>
}
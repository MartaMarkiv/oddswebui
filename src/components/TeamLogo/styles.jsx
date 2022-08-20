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

export {
    TeamLogoContainer,
    Image,
    TeamLogoGroupContainer,
}
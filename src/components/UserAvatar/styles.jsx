import styled from "styled-components";

const AvatarContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  span {
    font-size: 30px;
  }
`;

export {
    AvatarContainer
}
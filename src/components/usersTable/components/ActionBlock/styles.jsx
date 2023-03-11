import styled from "styled-components";

const ActionWrapper = styled.div`
`;

const Button = styled.button`
  border: none;
  background: none;
  height: 100%;
  padding: 0;
  cursor: pointer;
  .userIcon {
    font-size: 20px;
    color: ${({theme}) => theme.colors.logoColor};
    font-weight: 600;
  }
`
const Title = styled.div`
  margin-right: 10px;
  display: inline;
`;

export {
  ActionWrapper,
  Button,
  Title
}
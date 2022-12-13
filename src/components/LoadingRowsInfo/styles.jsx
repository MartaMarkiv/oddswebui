import styled from "styled-components";

const LoadingBoxStyled = styled.div`
  padding: 15px 0;
  display: flex;
  flex-direction: row;
`;

const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: ${({theme}) => theme.colors.textSecondary};
  margin-right: 20px;
`;

const TextGroup = styled.div`
  display: flex;
`;

export {
  LoadingBoxStyled,
  Text,
  TextGroup
}

import styled from "styled-components";

const GameInfoBoxStyled = styled.div`
  padding: 15px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
`;

const TimeGroup = styled.div`
  margin-top: 26px;
  margin-bottom: 12px;
`;

const TextSecondary = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const Text = styled(TextSecondary)`
  color: inherit;
`;

export {
    GameInfoBoxStyled,
    TimeGroup,
    TextSecondary,
    Text
}

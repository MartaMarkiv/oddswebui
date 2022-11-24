import styled from "styled-components";

const GameInfoBoxStyled = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row-reverse;
`;

const GameName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const TimeGroup = styled.div`
  margin-top: 12px;
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
    GameName,
    TimeGroup,
    TextSecondary,
    Text
}

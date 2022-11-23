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

const GameName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const TimeGroup = styled.div`
  margin: 12px 0;
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

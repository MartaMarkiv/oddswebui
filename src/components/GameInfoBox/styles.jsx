import styled from "styled-components";

const GameInfoBoxStyled = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
`;

const GameNameGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`;

const GameName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const TimeGroup = styled.div`
  width: 100px;
  border-right: 1px solid #DFE5EB;
  padding-right: 10px;
`;

const TextSecondary = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const Text = styled(TextSecondary)`
  color: inherit;
`;

export {
    GameInfoBoxStyled,
    GameNameGroup,
    GameName,
    TimeGroup,
    TextSecondary,
    Text
}

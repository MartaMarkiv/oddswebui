import styled from "styled-components";

const BetTypeBoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const GameName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  margin-left: 10px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const BetTypeGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
  border-left: 1px solid #DFE5EB;

  div:first-child {
    border-bottom: 1px solid #DFE5EB;
  }
`;

const TextSecondary = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  padding: 5px;
  color: ${({theme}) => theme.colors.textSecondary};
`;

const Text = styled(TextSecondary)`
  color: inherit;
  padding-top: 10px;
`;

const Team = styled(TextSecondary)`
  color: inherit;
  height: 30px;
  text-align: center;
`;

export {
    BetTypeBoxStyled,
    GameName,
    BetTypeGroup,
    Text,
    Team
}

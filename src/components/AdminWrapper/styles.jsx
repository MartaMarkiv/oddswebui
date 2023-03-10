import styled from "styled-components";

const Wrapper = styled.div`
position: relative;
`;

const TitlePage = styled.div`
  width: 175px;
  height: 48px;
  display: block;
  color: ${({theme}) => theme.colors.logo};
`;

const TitleTable = styled.div`
  width: 175px;
  height: 48px;
  display: block;
  color: ${({theme}) => theme.colors.logo};
`;

const HeaderPanel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  h2 {
    margin-bottom: 0;
  }
`;

const AddUserButton = styled.button`
  background: ${({theme}) => theme.colors.headerControls.bg};
  color: ${({theme}) => theme.colors.textPrimary};
  font-size: 16px;
  border-radius: 20px;
  border: none;
  padding: 5px 15px;
  margin-left: 20px;
  cursor: pointer;
`;

export {
  Wrapper,
  HeaderPanel,
  TitlePage,
  AddUserButton,
  TitleTable
}

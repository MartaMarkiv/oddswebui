import styled from "styled-components";

const OpportunityListContainer = styled.div`
margin-left: 10px;`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  min-width: 380px;
`;
const ListItem = styled.li`
  display: block;
  margin-bottom: 12px;
  border: 4px solid;
  border-color: ${({theme}) => theme.colors.drawer.bg};
`;

const Title = styled.div` 
font-size: 18px;
font-weight: 500;
margin-bottom: 10px;
`;

export {
    OpportunityListContainer,
    List,
    ListItem,
    Title
}
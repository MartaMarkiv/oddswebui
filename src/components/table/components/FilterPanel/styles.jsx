import styled from "styled-components";

const FilterPanelContainer = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  margin: 0 0 24px;
`;

const FilterPanelItem = styled.li`
  display: block;
  
  &:not(:last-child) {
    margin-right: 12px;
  }
`;

export {
    FilterPanelContainer,
    FilterPanelItem
}
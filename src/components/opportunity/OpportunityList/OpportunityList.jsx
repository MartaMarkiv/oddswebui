import {List, ListItem, OpportunityListContainer, Title} from "./styles";
import {OpportunityItem} from "../OpportunityItem";

export const OpportunityList = ({
    opportunities,
    selectOpportunity,
    selectedOpportunity,
    name
}) => {

    return <OpportunityListContainer>
        <Title>{name} Feed</Title>
        <List>
            {
                opportunities && opportunities.map((item, index) => {
                    return <ListItem key={`${item.id}-${index}`}>
                        <OpportunityItem
                            data={item}
                            selected={selectedOpportunity ? selectedOpportunity.id : null}
                            onSelect={selectOpportunity}
                        />
                    </ListItem>
                })
            }
        </List>
    </OpportunityListContainer>
}
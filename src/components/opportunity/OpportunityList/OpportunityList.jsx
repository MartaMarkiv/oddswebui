import {List, ListItem, OpportunityListContainer} from "./styles";
import {OpportunityItem} from "../OpportunityItem";

export const OpportunityList = ({
    opportunities,
    selectOpportunity,
    selectedOpportunity
}) => {

    return <OpportunityListContainer>
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
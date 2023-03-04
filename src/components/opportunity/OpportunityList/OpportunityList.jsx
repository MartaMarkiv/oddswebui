import { useState } from "react";
import {List, ListItem, OpportunityListContainer, Title} from "./styles";
import {OpportunityItem} from "../OpportunityItem";

export const OpportunityList = ({
    opportunities,
    name
}) => {

    const [selectedOpportunity, setSelectedOpportunity] = useState(null);

    return <OpportunityListContainer>
        <Title>{name} Feed</Title>
        <List>
            {
                opportunities && opportunities.map((item, index) => {
                    return <ListItem key={`${item.id}-${index}`}>
                        <OpportunityItem
                            data={item}
                            selected={selectedOpportunity ? selectedOpportunity.id : null}
                            onSelect={setSelectedOpportunity}
                        />
                    </ListItem>
                })
            }
        </List>
    </OpportunityListContainer>
}
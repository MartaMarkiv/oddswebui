import {List, ListItem, OpportunityListContainer, Title, EmptyList} from "./styles";
import {OpportunityItem} from "../OpportunityItem";

export const OpportunityList = ({
    opportunities,
    name
}) => {

    return <OpportunityListContainer>
        <Title>{name} Feed</Title>
        {
            opportunities && opportunities.length ?
                <List>
                {
                    opportunities.map((item, index) => {
                        return <ListItem key={`${item.id}-${index}`}>
                            <OpportunityItem
                                data={item}
                            />
                        </ListItem>
                    })
                }
                </List> :
                <EmptyList>There is not any opportunity right now.</EmptyList>
        }
        
    </OpportunityListContainer>
}
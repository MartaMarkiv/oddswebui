import { OpportunityList } from "../OpportunityList";
import { Wrapper } from "./styles";

export const OpportunityWrapper = ({
    isProp,
    isPopular,
    listProp,
    listPopular
}) => {

    return (          
        <Wrapper>
            { isProp && 
                <OpportunityList
                    opportunities={listProp}
                    name="Prop"
                />
            }
            { isPopular &&
                <OpportunityList
                    opportunities={listPopular}
                    name="Popular"
                />
            }
        </Wrapper>
    )
};
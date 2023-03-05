import {useState, useEffect} from "react";
import { w3cwebsocket as WebSocket } from "websocket";
import {OpportunityList} from "../OpportunityList";
import {DrawerStyled, OpportunitiesWrapper} from "./styles";
import {PendingScreen} from "../../../components/PendingScreen";
import { EmptyView } from "../../EmptyView/EmptyView";
import {OPPORTUNITY} from "../../../constants";
import {parser, arbitrageFilter} from "../utils";

const client = new WebSocket(OPPORTUNITY);

export const OpportunityDrawer = ({
    isProp,
    isPopular,
    showAll,
    setShowAll
}) => {

    const [collection, setCollection] = useState(null);

    const [loading, setLoading] = useState(true);

    const connectSocket = () => {

        client.onopen =(() => {
            setLoading(false);
        });

        client.onmessage = (event) => {
            const json = JSON.parse(event.data);
            
            const allOpportunities = json.length ? json.map(item => item.games).flat() : [];

            const parsedData = parser(allOpportunities);
            setCollection(parsedData);
        };

        client.onerror = () => {
            console.log("Opportunity socket connection error");
        };
    }

    useEffect(() => {
        connectSocket();
    }, []);

    const list = showAll ? collection : arbitrageFilter(collection);

    return (
        <DrawerStyled>
            {
                loading ? 
                    <PendingScreen position={"absolute"}/> :
                    isPopular || isProp ?
                    <OpportunitiesWrapper>
                        { isProp && 
                            <OpportunityList
                                opportunities={list}
                                name="Prop"
                            />
                        }
                        { isPopular &&
                            <OpportunityList
                                opportunities={list}
                                name="Popular"
                            />
                        }
                    </OpportunitiesWrapper> :
                    <EmptyView />
                        
            }
        </DrawerStyled>
    )
};
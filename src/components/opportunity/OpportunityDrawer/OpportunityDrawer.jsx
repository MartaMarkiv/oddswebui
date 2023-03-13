import {useState, useEffect} from "react";
import { w3cwebsocket as WebSocket } from "websocket";
import {OpportunityList} from "../OpportunityList";
import {DrawerStyled, OpportunitiesWrapper} from "./styles";
import {PendingScreen} from "../../../components/PendingScreen";
import { EmptyView } from "../../EmptyView/EmptyView";
import { OPPORTUNITY_POPULAR, OPPORTUNITY_PROP } from "../../../constants";
import {parser, arbitrageFilter} from "../utils";
import opportunityData from "../../../opportunity_data.json";

const clientPopular = new WebSocket(OPPORTUNITY_POPULAR);
const clientProp = new WebSocket(OPPORTUNITY_PROP);

export const OpportunityDrawer = ({
    isProp,
    isPopular,
    user,
    showAll
}) => {

    const [collectionPopular, setCollectionPopular] = useState([]);
    const [collectionProp, setCollectionProp] = useState([]);

    const [loading, setLoading] = useState(true);

    const connectPopualrSocket = () => {

        clientPopular.onopen =(() => {
            setLoading(false);
        });

        clientPopular.onmessage = (event) => {
            if (!user) {
                setCollectionPopular(opportunityData);
                return;
            }
            
            const json = JSON.parse(event.data);
            
            const allOpportunities = json.length ? json.map(item => item.games).flat() : [];

            const parsedData = parser(allOpportunities);

            setCollectionPopular(parsedData);
        };

        clientPopular.onerror = () => {
            console.log("Popular opportunity socket connection error");
        };
    };
    
    const connectPropSocket = () => {

        clientProp.onopen =(() => {
            setLoading(false);
        });

        clientProp.onmessage = (event) => {
            if (!user) {
                setCollectionProp(opportunityData);
                return;
            }

            const json = JSON.parse(event.data);
            
            const allOpportunities = json.length ? json.map(item => item.games).flat() : [];

            const parsedData = parser(allOpportunities);

            setCollectionProp(parsedData);
        };

        clientProp.onerror = () => {
            console.log("Prop opportunity socket connection error");
        };
    }


    useEffect(() => {
        connectPopualrSocket();
        connectPropSocket();
    }, [user]);

    const listPopular = showAll ? collectionPopular : arbitrageFilter(collectionPopular);
    const listProp = showAll ? collectionProp : arbitrageFilter(collectionProp);

    return (          
        <DrawerStyled>
            {
                loading ? 
                    <PendingScreen position={"absolute"}/> :
                    isPopular || isProp ?
                    <OpportunitiesWrapper>
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
                    </OpportunitiesWrapper> :
                    <EmptyView />
                        
            }
        </DrawerStyled>
    )
};
import { useState, useEffect } from "react";
import { w3cwebsocket as WebSocket } from "websocket";
import { DrawerStyled } from "./styles";
import { PendingScreen } from "../../../components/PendingScreen";
import { EmptyView } from "../../EmptyView/EmptyView";
import { OPPORTUNITY_POPULAR, OPPORTUNITY_PROP } from "../../../constants";
import { parser, arbitrageFilter } from "../utils";
import { OpportunityWrapper } from "../OpportunityWrapper";

const clientPopular = new WebSocket(OPPORTUNITY_POPULAR);
const clientProp = new WebSocket(OPPORTUNITY_PROP);

export const OpportunityDrawer = ({
    isProp,
    isPopular,
    showAll
}) => {

    const [collectionPopular, setCollectionPopular] = useState([]);
    const [collectionProp, setCollectionProp] = useState([]);

    const [loading, setLoading] = useState(true);

    const connectPopualrSocket = () => {

        clientPopular.onmessage = (event) => {
            setLoading(false);
           
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

        clientProp.onmessage = (event) => {
            setLoading(false);
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
    }, []);

    const listPopular = showAll ? collectionPopular : arbitrageFilter(collectionPopular);
    const listProp = showAll ? collectionProp : arbitrageFilter(collectionProp);

    return (          
        <DrawerStyled>
            {
                loading ? 
                    <PendingScreen position={"absolute"}/> :
                    isPopular || isProp ?
                        <OpportunityWrapper
                            isPopular={isPopular}
                            isProp={isProp}
                            listPopular={listPopular}
                            listProp={listProp}
                        /> :
                        <EmptyView />
                        
            }
        </DrawerStyled>
    )
};
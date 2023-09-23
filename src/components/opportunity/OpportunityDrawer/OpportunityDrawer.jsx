import { useState, useEffect } from "react";
import { w3cwebsocket as WebSocket } from "websocket";
import { notification } from "antd";
import { DrawerStyled } from "./styles";
import { PendingScreen } from "../../../components/PendingScreen";
import { EmptyView } from "../../EmptyView/EmptyView";
import { OPPORTUNITY_POPULAR, OPPORTUNITY_PROP } from "../../../constants";
import { parser, arbitrageFilter } from "../utils";
import { OpportunityWrapper } from "../OpportunityWrapper";
import { useCurrentUser } from "../../../shared/context/UserProvider";
import  useAuthenticated from "../../../shared/hooks/useAuthenticated";

export const OpportunityDrawer = ({
    isProp,
    isPopular,
    showAll
}) => {

    const [collectionPopular, setCollectionPopular] = useState([]);
    const [collectionProp, setCollectionProp] = useState([]);

    const { handleLogout, loggedInUser, setUserToken } = useAuthenticated();
    const { userToken, refreshToken } = loggedInUser() || {}


    const paramsString = `token=${userToken}&refresh_token=${refreshToken}`;
    const clientPopular = new WebSocket(`${OPPORTUNITY_POPULAR}?${paramsString}`);
    const clientProp = new WebSocket(`${OPPORTUNITY_PROP}?${paramsString}`);

    const [loading, setLoading] = useState(true);


    const emitClientData = (event) => {
        setLoading(false);

        const json = JSON.parse(event.data);
        const { new_access_token: newAccessToken, data } = json;

        if (newAccessToken) {
            setUserToken(newAccessToken);
        }
        if (!json.success && json.message && userToken) {
            openNotification(json.message);
            if (json.message === "Expired token" ||
                json.message === "Unauthorized user" ||
                json.message === "User is blocked"
            ) {
                handleLogout();
            }
        }

        const allOpportunities = data.length ? data.map(item => item.games).flat() : [];
        const parsedData = parser(allOpportunities);

        return parsedData;
    }

    const connectPopualrSocket = () => {

        clientPopular.onmessage = (event) => {
            const parsedData = emitClientData(event);
            setCollectionPopular(parsedData);
        };

        clientPopular.onerror = () => {
            console.log("Popular opportunity socket connection error");
        };
    };
    
    const connectPropSocket = () => {

        clientProp.onmessage = (event) => {
                        const parsedData = emitClientData(event);

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

    const openNotification = (content) => {
        notification.error({
          message: "Error",
          description: content,
        });
    };

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